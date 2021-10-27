const fs = require('fs');
const https = require('https');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
//? json형식인 요청 데이터를 받을 수 있다

app.use(express.urlencoded({ extended: false }));
//? extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 객체 안에 객체를 파싱할 수 있게하려면 true
//? https://sjh836.tistory.com/154
app.use(cors());
const PORT = 4000;
let server = app.listen(PORT);
module.exports = server;
