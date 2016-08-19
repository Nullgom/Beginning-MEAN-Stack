// 프로그램 실행 시간을 측정
console.time('alpha');

var output = 1;
for(var i = 1; i<= 100; i++) {
    output += i;
}
console.log('Result: ' + output);

// 시간 측정을 종료합니다.
console.timeEnd('alpha');