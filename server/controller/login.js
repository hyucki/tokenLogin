const { User } = require('../models');

module.exports = {
  post: async (req, res) => {
    //todo: 토큰 만들어서 같이 넘겨주기
    const user = await User.findOne({
      where: { userId: req.body.userId, password: req.body.password },
    });
    if (!user) {
      res.status(400).send({ message: '로그인 실패' });
    } else {
      //todo: 토큰만들기(access, refresh)
      //todo: 쿠키에 refresh토큰 담아서 보내주기
      res.status(200).send({
        userId: user.userId,
        message: '로그인 성공', //todo: 액세스토큰 같이 넘겨주기
      });
    }
  },
};
