const jwt = require('jsonwebtoken');

module.exports = {
  //todo: Token 생성 함수 만들기
  makeToken: (userInfo, secretKey, options) => jwt.sign(userInfo, secretKey, options),
  //todo: token 유효성 검사 함수 만들기
  isVerify: (token, secretKey) =>
    jwt.verify(token, secretKey, (err, result) => {
      if (err) throw err;
      else return result;
    }),
};
