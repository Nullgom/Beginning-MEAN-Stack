//  이벤트 모듈 가져오기
var events = require('events');
// eventEmitter 객체 생서
var eventEmitter = new events.EventEmitter();

// 리스너 #1
var listner1 = function () {
  console.log('리스너 #1 실행.');
};
// 리스너 #2
var listner2 = function () {
    console.log('리스너 #2 실행.');
};

// connection 이벤트에 리스너1 바인딩
eventEmitter.addListener('connection', listner1);
// connection 이벤트에 리스너2 바인딩
eventEmitter.on('connection', listner2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("connection 이벤트에 " + eventListeners + "개의 리스너가 등록 되어있습니다.");

// connection 이벤트 발생
eventEmitter.emit('connection');

// 리스너1을 바인딩에서 제거
eventEmitter.removeListener('connection', listner1);
console.log("현재 리스너#1를 제거 되었습니다.");

// connection 이벤트 발생
eventEmitter.emit('connection');
eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log("connection 이벤트에 " + eventListeners + "개의 리스너가 등록 되어있습니다.");

console.log("프로그램 종료");