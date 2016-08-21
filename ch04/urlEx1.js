// url 모듈을 가져옵니다.
var url = require('url');

var parsedObject = url.parse('https://ko.wikipedia.org/wiki/%EC%A1%B0%EC%84%A0_%EC%84%B8%EC%A2%85');
console.log(parsedObject);