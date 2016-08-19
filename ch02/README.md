2장 Node.js 환경 설정
====================

이 장에서는 Node.js 개발 환경을 설정하고자 합니다.
먼저  Node.js를 설치하려면 Node.js를 다운로드해야 합니다.

[http://nodejs.org](http://nodejs.org)에 접속하여 해당 버전을 다운로드합니다.


 * 대부분 사용자에게 권장: [v4.5.0 LTS](https://nodejs.org/dist/v4.5.0/node-v4.5.0-x64.msi)
 * 가장 최신 버전 : [v6.4.0 Current](https://nodejs.org/dist/v6.4.0/node-v6.4.0-x64.msi)

##1. 윈도우 환경에서 설치

* 두 가지 버전중 원하는 버전을 선택하여 msi 파일을 다운로드하여 설치를 진행합니다.

* 별도의 위치에 설치하지 않을 시 Next 버늩을 눌러 설치를 진행하여 완료 합니다.

* 설치가 완료되면 명령프로프트를 실행하여 `node --version`을 입력합니다.
   
```

	C:\> node --version

   	v6.4.0

   	C:\>
   ```
* `node` 명령어만 사용하면 Node.js 코드를 입력할 수 있는 입력 화면이 나타납니다. 이것을 **REPL**(Read Eval Print Loop)이라고 부르며 코드 한 줄씰 코드를 입력해 실행해볼 수 있습니다.

* **REPL**에 `console.log('Hello world)`코드를 입력하여 정상적으로 실행 되는지 확입합니다.