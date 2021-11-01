const { User } = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { isVerify } = require('./tokenFunctions');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  get: async (req, res) => {
    //todo: 토큰 받은걸 확인하면 조회해주기
    const findUser = (await User.findAll({ where: { userId: { [Op.like]: `%${req.headers.data ? req.headers.data : ''}%` } } })).map((el) => el.dataValues.userId);
    const accessToken = req.headers.authorization.split(' ')[1];
    // console.log(accessToken);
    try {
      const token = isVerify(accessToken, process.env.ACCESS_TOKEN); //? 토큰문제가 아닌 다른 문제라면 어떻게 처리하는게 좋을까
      res.status(200).send({ message: 'ok', data: findUser, token });
    } catch (err) {
      res.status(200).send({ message: 'invalid token', data: null, token: null });
    }
  },

  post: async (req, res) => {
    const result = isVerify(req.cookies.refreshToken, process.env.REFRESH_TOKEN);
    const { userId } = result;
    await User.destroy({ where: { userId } });
    res.clearCookie('refreshToken');
    res.status(200).send({ message: 'ok' });
  },
};
