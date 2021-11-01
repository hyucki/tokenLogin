module.exports = {
  get: (req, res) => {
    res.clearCookie('refreshToken');
    res.status(200).send({ message: 'success logout' });
  },
};
