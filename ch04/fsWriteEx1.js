// 모듈을 불러옵니다.
var fs = require('fs');

// 변수를 선언
var data = 'Hello Wold ...  !!';

// 비동기식 파일 쓰기
fs.writeFile('./files/TextFileOtherWrite.txt', data, 'utf8', function (err) {
    if(err) {
        console.log(err);
    }
    console.log('WRITE FILE ASYNC COMPLETE');
});