var fs = require('fs');

// 비동기식 파일 읽기
fs.readFile("./files/textFile.txt", "utf8", function(err, data) {
    if(err) {
        throw err;
    }
    console.log(data);
});

console.log("Reading file....");