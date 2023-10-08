const { User } = require('../models/User');

let auth = (req, res, next) => {
  let token = req.cookies.w_auth; //쿠키속에 담겨있는 토큰을 이용해서 

  User.findByToken(token, (err, user) => {//유저 정보를 가져옴
    if (err) throw err;
    if (!user)
      return res.json({
        isAuth: false,
        error: true
      });

    req.token = token;
    req.user = user; //그 리퀘스트 유저에 넣어서 그 모든 유저정보가 들어가게함
    next();
  });
};

module.exports = { auth };