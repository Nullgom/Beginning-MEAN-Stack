3장. Node.js 전역 객체
=====================

Node.js의 전역 개체는 본질적으로 글로벌이며, 그들은 모든 모듈에서 사용할 수 있습니다. 우리는 오히려 우리가 그들을 직접 사용할 수 있으며, 우리의 응용 프로그램에서 이러한 개체를 포함 할 필요가 없습니다. 이러한 개체는 모듈, 함수, 문자열이며, 다음에 설명하도록 자체를 객체입니다.

### __filename
`__filename`은 현재 실행되는 코드의 파일 경로를 나타냅니다.(파일이름이 포함된 절대 경로)

### __dirname
`__dirname`은 현재 실행중인 스크립트가 있는 디렉토리(폴더)의 경로를 나타냅니다.
 
   ```
	/* main.js 파일에 다음 코드를 입력 */
	console.log("__filname: " + __filename);
	console.log("__dirname: " + __dirname);

	$ node main.js
	__filename: /project/ch03/main.js
	__dirname: /project/ch03

   ```

### setTimeout(callback, ms)
`setTimeout(callback, ms)` 전역함수는 타이머와 같이 ms(밀리초) 후에 callback(콜백함수)를 실행하는데 사용됩니다.
이 함수는 타이머를 취소하는데 사용할 수 있는 타이머를 나타내는 timeout 객체를 반환합니다.
   ```
/* timeout.js 파일에 다음 코드를 입력 */
function printHello() {
	console.log("안녕하세요!");
}

// 이제 2초 후에 printHello()함수를 호출합니다.
setTimeout(printHello, 2000);


$ node timeout.js
안녕하세요!
   ```
### clearTimeout(timeout)
`clearTimeout(timer)` 전역함수는 setTimeout을 사용하여 생성된 타이버를 중지하는 데 사용됩니다.

### setInterval(callback, ms)
`setInterval(callback, ms)` 전역함수는 지정된 밀리초(ms) 마다, 콜백함수(callback)를 실행하는 데 사용합니다. 
이 함수는 타이머를 취소하는데 사용할 수 있는 타이머를 나타내는 interval 객체를 반환합니다.

### clearInterval(interval)
`clearInterval(interval)` 해당 interval을 취소하는데 사용합니다.

전역 객체
---------

### Console 객체
콘솔 화면과 관련된 기능을 다루는 객체입니다.

* **log()**  콘솔에 출력합니다.
* **time(label)** 시간을 측정을 시작합니다.
* **timeEnd(label)** 시간 측정을 종료합니다.

### Process 객체
프로그램과 관련된 기능을 다루는 객체입니다.

  **1) 속성**

  * **argv** 실행 매개 변수 배열
  * **env** 컴퓨터 환경과 관련된 정보를 표시
  * **version** node.js 버전을 표시
  * **versions** node.js와 종속된 프로그램 버전을 표시
  * **arch** 프로세서의 아키텍처를 표시
  * **platform** 플랫폼을 표시

  **2) 메서드**

  * **exit([exitCode = 0])** 프로그램을 종료합니다.
  * **memoryUsage()** 메모리 사용 정보 객체를 리턴합니다.
  * **uptime()** 현제 프로그램을 실행된 시간을 리턴합니다.

### Exports 객체와 모듈
Node.js는 모듈을 사용하여 기능을 확장합니다. 모듈은 기능을 쉽게 사용하고자 메서드와 속성을 미리 정의해 모아 놓은 것입니다. 이런 모듈을 생성할 때는 **exports** 객체를 사용합니다.

	/* mymodule.js 파일 */
	// 절대값을 구하는 메서드입니다.
	exports.abs = function(number) {
	    if (0 < number) {
	        return number
	    } else {
	        return -number;
	    }
	};

	// 원의 넓이를 구하기
	exports.circleArea = function (radius) {
	    return radius * radius * Math.PI;
	};


	/* moduleEx.js 파일 */
	var myModule = require('./mymodule');
	
	// 모듈을 사용합니다.
	console.log("-273의 절대값 : ", myModule.abs(-273));
	console.log("반지름3의 원의 넓이: ", myModule.circleArea(3));

	=== 실행 결과 ==============================
	$node moduleEx.js
	 -273의 절대값 :  273
	반지름3의 원의 넓이:  28.274333882308138

	
	
### 그밖에 객체들
 node.js api를 참고

* [node.js v4.x API](https://nodejs.org/dist/latest-v4.x/docs/api/)
* [node.js v6.x API](https://nodejs.org/dist/latest-v6.x/docs/api/)
* [node.js v0.10.35 한글판 API](http://nodejs.sideeffect.kr/docs/v0.10.35/api/util.html)