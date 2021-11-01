const { isVerify, makeToken } = require('./tokenFunctions');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  get: (req, res) => {
    // console.log(req.cookies.refreshToken);
    const result = isVerify(req.cookies.refreshToken, process.env.REFRESH_TOKEN);
    // console.log(result);
    const { userId } = result;
    const accessToken = makeToken({ userId }, process.env.ACCESS_TOKEN, { expiresIn: '10s' });
    res.status(200).send(accessToken);
  },
};
