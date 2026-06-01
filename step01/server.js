const http = require('http');
const express = require('express');
const app = express();

var objList = [];

// 서버 설정 (app.set())

// * 미들웨어 설정 (app.ues())
// ^ http:localhost:3000/ajax_ex01.html로 public 폴더 내부 접근 가능하게 만드는 것
app.use(express.static("public"));

app.get('/data', (req, res) => {
  // 쿼리 스트링 데이터 처리
  objList.push(req.query);

  res.redirect('/');
});

app.get('/', (req, res) => {
    res.send(objList);
});

const server = http.createServer(app);

server.listen(3000, ()=> {
  console.log("Nodejs Server ...")
});