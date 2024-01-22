const express = require('express');
const path = require('path');
const cors = require('cors');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// mongoose
mongoose.connect(URI)
    .then(() => {
        console.log('연결 완료');
    })
    .catch(err => {
        console.error(err);
    })

//get
app.get('/', (req, res, next) => {
  setImmediate(() => { next(new Error('에러 응답 확인용.')) });
})


//post
app.post('/',(req, res)=>{
  console.log(req.body);
  res.json(req.body);
});

//데이터 처리
app.use('/users', require('./routes/users'))//경로들이 많으니 user라는 파일을 따로 만들어서 "/users" 라는 경로를 받게되면 처리.
app.use('/products', require('./routes/products'));

//에러 처리
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send(error.message || '서버에서 에러가 났습니다.');
})

//정적 파일 서비스 설정.
app.use(express.static(path.join(__dirname, '../public')));
app.listen(PORT, HOST, ()=> console.log(`${PORT}:${HOST}에서 서버 작동`));
