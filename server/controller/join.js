const { User } = require('../models');

module.exports = {
  post: async (req, res) => {
    // console.log(req.body);
    const findUser = await User.findOne({ where: { userId: req.body.userId } });
    if (!findUser) {
      const newUser = await User.create(req.body);
      if (!newUser) {
        res.status(400).send({ message: '회원가입 실패' });
      } else {
        res.status(200).send({
          message: '회원가입 성공',
          joinUser: newUser.userId,
        });
      }
    } else {
      res.status(400).send({ message: '유저아이디가 존재함' });
    }
  },
};
