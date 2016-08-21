//  이벤트 모듈 가져오기
var events = require('events');
// eventEmitter 객체 생서
var eventEmitter = new events.EventEmitter();

// 이벤트 헤들러 생성
var connectHandler = function connected() {
    console.log('접속 성공!');

    // data_received 이벤트 발생
    eventEmitter.emit('data_received');
};

// connection 이벤트 와 헨들러 바인딩
eventEmitter.on('connection', connectHandler);

// data_received 이벤트 바인딩
eventEmitter.on('data_received', function () {
    console.log('데이타 수신 성공.');
});

// connection 이벤트 발생
eventEmitter.emit('connection');

console.log("프로그램 종료");