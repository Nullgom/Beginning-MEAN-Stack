4장. 기본 내장 모듈
==================

### os 모듈

* **hostname()** 운영체제 호스트 이름을 리턴합니다.
* **type()** 운영체제 이름을 리턴합니다.
* **platform()** 운영체제 플랫폼을 리턴합니다.
* **arch()** 운영체제 아키택처를 리턴합니다.
* **release()** 운영체제 버번을 리턴합니다.
* **uptime()** 운영체체가 실행된 시간을 리턴합니다.
* **loadavg()** 로드 에버리지 정보를 담은 배열을 리턴합니다.
* **totalmem()** 시스템 총 메모리를 리턴합니다.
* **freemem()** 시스템에서 사용 가능한 메모리를 리턴합니다.
* **cpus()** CPU 정보를 담은 객체를 리턴합니다.
* **getNetworkInterfaces()** 네트워크 인터페이스 정보를 담은 배열을 리턴합니다.


### url 모듈

* **parse(urlStr [, parseQueryString = false, slashesDenoteHost = false])** URL 문자열을 URL 객체로 변환해 리턴합니다.
* **format(urlObj)** URL 객체를 URL 문자열로 변환해 리턴합니다.
* **resolve(from, to)** 매개변수를 조합하여 완전한 URL 문자열을 생성해 리턴합니다.


### Query String 모듈

* **stringify(obj[, sel='&', eq='='])** 쿼리 객체를 쿼리 문자열로 변환해 리턴합니다.
* **parse(str[, seq='&', eq='='])** 쿼리 문자열을 쿼리 객체로 변환해 리턴합니다.


### util 모듈
util 모듈은 Node.js의 보조적인 기능을 모아둔 모듈입니다.

* **format()** 매개 변수로 입력한 문자열을 조합해 리턴합니다.


### File System 모듈

* **readFile(file, encoding, callback)** 파일을 비동기적으로 읽습니다.
* **readFileSync(file, encoding)** 파일을 동기적으로 읽습니다.
* **writedFile(file, data, encoding, callback)** 파일을 비동기적으로 씁니다.
* **writeFileSync(file, data, encoding)** 파일을 동기적으로 씁니다.
* 