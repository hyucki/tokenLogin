const { User } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;

module.exports = {
  get: async (req, res) => {
    // const userInfo = await User.findAll();
    // console.log('1', user);
    //todo: 토큰 받은걸 확인하면 조회해주기
    // console.log(req.headers.data);
    const findUser = (await User.findAll({ where: { userId: { [Op.like]: `%${req.headers.data ? req.headers.data : ''}%` } } })).map((el) => el.dataValues.userId);

    // const findUser = userInfo.filter((el) => el.userId.includes(req.headers.data)).map((el) => el.userId);
    if (!findUser) {
      res.status(400).send({ message: 'User not found' });
    } else {
      res.status(200).send({ message: 'User found', data: findUser });
    }
    // const result = userInfo.map((el) => el.userId);
  },
};
