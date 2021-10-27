const express = require('express');
const router = express.Router();

const { join, login, userinfo } = require('../controller');

router.post('/join', join.post);

router.post('/login', login.post);

router.get('/userinfo', userinfo.get);
// todo: 회원가입(post), 로그인(post), 조회(get)

module.exports = router;
