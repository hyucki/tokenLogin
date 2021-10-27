const fs = require('fs');
const https = require('https');
const cors = require('cors');
const express = require('express');
const usersRouter = require('./route/user');

const app = express();
app.use(express.json());
//? json형식인 요청 데이터를 받을 수 있다

app.use(express.urlencoded({ extended: false }));
//? extended 는 중첩된 객체표현을 허용할지 말지를 정하는 것이다. 객체 안에 객체를 파싱할 수 있게하려면 true
//? https://sjh836.tistory.com/154
app.use(cors());

const PORT = 4000;

app.use('/users', usersRouter);

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  //? existsSync = 해당경로에 파일이 존재하는지 여부 확인(boolean 값)
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  //? readFileSync = 파일을 읽는 내장 메소드(path, options), dirname = 현재 실행중인 폴더 경로
  const credentials = { key: privateKey, cert: certificate };
  server = https.createServer(credentials, app);
  server.listen(PORT, () => console.log('https가 실행됨'));
} else {
  server = app.listen(PORT, () => console.log('잘 실행되니?'));
}
module.exports = server;
