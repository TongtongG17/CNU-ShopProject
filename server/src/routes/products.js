const express = require('express');
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const multer = require('multer');
const router = express.Router();
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'public/')
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname}`)
  }
})


const upload = multer({ storage: storage }).single('file')
//이미지 업로드
router.post('/image', auth, async (req, res, next) => {

  upload(req, res, err => {
      if (err) {
          return req.status(500).send(err);
      }
      return res.json({ fileName: res.req.file.filename })
  })

})


//업로드전, 이미지 클릭시 이미지 삭제.
router.delete('/image/:fileName', auth, async (req, res, next) => {
  try {
    const filePath = `public/${req.params.fileName}`;

    // 파일 삭제
    fs.unlinkSync(filePath);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
})
 
//상품상세 페이지
router.get('/:id', async (req, res, next) => {

    const type = req.query.type;
    let productIds = req.params.id;

if(type === 'array') {
    // ex) id=32423423423,345345345345345,345345345
    // productIds = ['32423423423', '345345345345345345', '345345345345345']

    let ids = productIds.split(',');
    productIds = ids.map(item => {
        return item
    })
}
    // productId를 이용해서 DB에서 productId와 같은 상품의 정보를 가져옴.
    try {
        const product = await Product
            .find({ _id: { $in: productIds } })
            .populate('writer');

        return res.status(200).send(product);

    } catch (error) {
        next(error);
    }

})


router.get('/', async (req, res, next) => {
  // asc 오름차순  , desc 내림차순
  const order = req.query.order ? req.query.order : 'desc';
  const sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  const limit = req.query.limit ? Number(req.query.limit) : 20;
  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const term = req.query.searchTerm;

  let findArgs = {};
  for (let key in req.query.filters) {
      if (req.query.filters[key].length > 0) {
          if (key === "price") {
              findArgs[key] = {
                  //Greater than equal
                  $gte: req.query.filters[key][0],
                  //Less than equal
                  $lte: req.query.filters[key][1]
              }
          } else {
              findArgs[key] = req.query.filters[key];
          }
      }
  }

  if (term) {
      findArgs["$text"] = { $search: term };
  }

  console.log(findArgs);


  try {
      const products = await Product.find(findArgs)
          .populate('writer')
          .sort([[sortBy, order]])
          .skip(skip)
          .limit(limit)

      const productsTotal = await Product.countDocuments(findArgs);
      const hasMore = skip + limit < productsTotal ? true : false;

      return res.status(200).json({
          products,
          hasMore
      })

  } catch (error) {
      next(error);
  }
})

//상품 업로드 db저장
router.post('/', auth, async (req, res, next) => {
  try {
      const product = new Product(req.body);
      product.save();
      return res.sendStatus(201);
  } catch (error) {
      next(error);
  }
})

module.exports = router