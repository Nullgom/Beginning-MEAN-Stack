5장. 이벤트(Events)
=================

Node.js가 단일 스레드 응용 프로그램입니다. 그것은 이벤트와 콜백의 개념을 통해 동시성을 지원하고 있습니다. Node.js의 모든 API는 비동기 및 단일 스레드 된 바와 같이, 비동기 함수가 동시성을 유지하기 위해 호출을 사용하고 있습니다. Node는 옵저버 패턴을 사용하고 있습니다. Node 스레드가 이벤트루프를 유지하고 모든 작업이 완료 얻을 때마다 그것이 실행되기 때문에 이벤트 리스너 함수를 신호에 대응하는 이벤트를 발생시킵니다.


## Events 모듈 사용 방법
events 모듈과 함께 EventEmitter 클래스를 통해 사용 가능한 이벤트의 복수를 가지고 있습니다.

	```
	// events 모듈 가져오기
	var events = require('events');
	
	// eventEmitter 객체 생성
	var eventEmitter = new events.EventEmitter();

	```

  해당 이벤트의 이벤트핸들러의 바인딩 방법은 다음과 같다.

	```
	//이벤트와 이벤트 헨들러 바인딩 하기
	eventEmitter.on('eventName', eventHandler);
	```
  이벤트를 발생시기는 방법은 다음과 같다.

	// 이벤트 발생하기 
	eventEmitter.emit('eventName');