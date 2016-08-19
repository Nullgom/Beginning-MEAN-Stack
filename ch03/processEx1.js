/**
 * process.arv 속성과 pocess.exit() 메서드
 * $node processEx1.js --exit 1000
 **/
// process.argv
process.argv.forEach(function(item, index) {
    // 매개변수를 출력합니다.
    console.log(index + " : " + typeof item + ' : ', item);

    // 실행 매개 변수에 --exit 가 있을 때
    if(item == '--exit') {
        // 다음 실행 매개 변수를 얻습니다.
        var exitTime = Number(process.argv[index + 1]);

        // 일정 시간 후 프로그램을 종료합니다.
        setTimeout(function () {
            process.exit();
        }, exitTime);
    }
});