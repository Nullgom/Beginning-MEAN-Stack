// console.log() 메서드의 특수 문자
console.log('숫자: %d + %d = %d', 273, 52, 273 + 52);
console.log('문자열 %s', 'Hello World ++ !',  '특수 기호와 상관 없음');
console.log('JSON: %j', { first: "George", last: "Washington" });

// 출력 글자에 색 적용하기
// 30~37 글자색을 지정, 40~47 배경색을 지정
console.log('\u001b[31m', 'Hello World .. RED');
console.log('\u001b[32m', 'Hello World ..GREEN');
console.log('\u001b[33m', 'Hello World ..YELLOW');
console.log('\u001b[34m', 'Hello World ..BLUE');
console.log('\u001b[35m', 'Hello World ..MAGENTA');
console.log('\u001b[36m', 'Hello World ..CYAN');
console.log('\u001b[1m'); // 0은 초기화 , 1은 색을 밝게 합니다.
console.log('\u001b[31m', 'Hello World .. RED');
console.log('\u001b[32m', 'Hello World ..GREEN');
console.log('\u001b[33m', 'Hello World ..YELLOW');
console.log('\u001b[34m', 'Hello World ..BLUE');
console.log('\u001b[35m', 'Hello World ..MAGENTA');
console.log('\u001b[36m', 'Hello World ..CYAN');
// console.log('\u001b[0m', '\u001b[37m');
// console.log('\u001b[41m', 'Hello World .. RED');
// console.log('\u001b[42m', 'Hello World ..GREEN');
// console.log('\u001b[43m', 'Hello World ..YELLOW');
// console.log('\u001b[44m', 'Hello World ..BLUE');
// console.log('\u001b[45m', 'Hello World ..MAGENTA');
// console.log('\u001b[46m', 'Hello World ..CYAN');
// console.log('\u001b[47m', 'Hello World ..GRAY');