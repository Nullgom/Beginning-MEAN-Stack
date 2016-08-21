var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('./files/textFile.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened successfully!");
});
/*
 fs.open(path, flags[, mode], callback)
 flags 설명
r	읽기위한 파일 열기. 파일이 존재하지 않는 경우 예외가 발생합니다.
r+	읽기와 쓰기용 으로 파일 열기. 파일이 존재하지 않는 경우 예외가 발생합니다.
rs	동기 모드에서 읽기위한 파일 열기.
rs+	동기 모드에서 읽기와 쓰기 위한 파일열기, 주의해서 사용하기 위해 'rs'를 참조하십시오.
w	쓰기 위해 파일 열기. 파일 생성(존재하지 않는 경우), 또는 (존재한다면) 잘립니다.
wx	'w' 같지만,  경로가 존재하는 경우 실패합니다.
w+	읽고 쓰기 용으로 파일 열기. 파일 생성 (존재하지 않는 경우), 또는 (존재한다면) 절단된다.
wx+	'w+' 같지만, 경로가 존재하는 경우 실패합니다.
a	추가하기위해 파일을 엽니다. 존재하지 않는 경우 파일이 생성됩니다.
ax	'a' 와 같지만, 경로가 존재하는 경우 실패합니다.
a+	읽기와 추가용으로 파일을 엽니다. 존재하지 않는 경우 파일이 생성됩니다.
ax+	'a+' 같지만 경로가 존재하는 경우 실패합니다.
*/