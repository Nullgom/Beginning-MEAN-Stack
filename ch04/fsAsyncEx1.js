/* 비동기 처리를 하는 메서드의 예외 처리 */
var fs = require('fs');

// 파일을 읽습니다.
fs.readFile('./files/textFile.txt', 'utf8', function (err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

// 파일을 씁니다.
fs.writeFile('./files/textFile.txt', 'Hello World ..!', 'utf8', function (err) {
    if(err) {
        console.log(err);
    } else {
        console.log('FILE WRITE COMPLETED!');
    }
});