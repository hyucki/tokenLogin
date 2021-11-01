const { User } = require('../models');
const { makeToken } = require('./tokenFunctions');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  post: async (req, res) => {
    //todo: 토큰 만들어서 같이 넘겨주기
    const user = await User.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    if (!user) {
      res.status(400).send({ message: '로그인 실패' });
    } else {
      const { userId } = user;
      //todo: 토큰만들기(access, refresh)
      const accessToken = makeToken({ userId }, process.env.ACCESS_TOKEN, { expiresIn: '10s' });
      const refreshToken = makeToken({ userId }, process.env.REFRESH_TOKEN, { expiresIn: '1y' });
      // console.log(refreshToken);
      //todo: 쿠키에 refresh토큰 담아서 보내주기(httpOnly, sameSite, secure)옵션도 같이 넘겨 줄 것!
      res.cookie('refreshToken', refreshToken, { httpOnly: true, sameSite: 'None', secure: true });
      res.status(200).send({
        userId: user.userId,
        message: '로그인 성공',
        accessToken,
        //todo: 액세스토큰 같이 넘겨주기
      });
    }
  },
};
