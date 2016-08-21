/* 동기 처리를 하는 메서드의 예외 처리 */
var fs = require('fs');

// 파일을 읽습니다.
try {
    var data = fs.readFileSync('./files/textFile.txt', 'utf8');
    console.log(data);
} catch (e) {
    console.log(e);
}

// 파일을 씁니다.
try {
    fs.writeFileSync('./files/textFile.txt', 'Hello World ..!', 'utf8');
    console.log('FILE WRITE COMPLETED!');
} catch (e) {
    console.log(e);
}