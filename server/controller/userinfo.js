const { User } = require('../models');

module.exports = {
  get: async (req, res) => {
    //todo: 토큰 받은걸 확인하면 조회해주기
    const userInfo = await User.findAll();
    if (!userInfo) {
      res.status(400).send({ message: '일치하는 유저가 없어~' });
    } else {
      res.status(200).send(userInfo);
    }
  },
};
