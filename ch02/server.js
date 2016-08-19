// 모듈을 추출합니다.
var http = require("http") // http 모듈 가져오기

// 웹 서버를 생성 및 실행합니다.
http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello World !! \n");
}).listen(3000);
// 콘솔에 메세지를 출력
console.log('Server running at http://localhost:3000/');

