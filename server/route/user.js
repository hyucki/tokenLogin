const express = require('express');
const router = express.Router();

const { join, login, logout, userinfo, renewalToken } = require('../controller');

router.post('/join', join.post);

router.post('/login', login.post);

router.get('/logout', logout.get);

router.get('/userinfo', userinfo.get);

router.post('/userinfo', userinfo.post);

router.get('/renewalToken', renewalToken.get);
// todo: 회원가입(post), 로그인(post), 조회(get)

module.exports = router;
