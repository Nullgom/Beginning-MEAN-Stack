/* os 모듈 */
var os = require('os'); // os 모듈을 불러옵니다.


// 운영체제 호스트 이름을 리턴한다.
console.log('hostname() : ', os.hostname());
// 운영체제의 이름을 리턴한다. Linux, Darwin, Windows_NT
console.log('type() : ', os.type());
// 운영체제의 플랫폼을 리턴한다. darwin, freebsd, linux, sunos, win32 ..
console.log('platform() : ', os.platform());
// 운영체제의 아키텍처를 리턴한다. arm, arm64, ia32,  mips, x32, x64, x86
console.log('arch() : ', os.arch());
// 운영체제 버전을 리턴합니다.
console.log('release() : ', os.release());
// 운영체제가 실행된 시간을 리턴합니다.
console.log('uptime() : ', os.uptime());
// 로드 에버리지 정보를 담은 배열을 리턴합니다.
console.log('loadavg() : ', os.loadavg());
// 시스템의 총 메모리를 리턴합니다
console.log('totalmem() : ', os.totalmem());
// 시스템의 사용 가능한 메로리를 리턴
console.log('freemem() : ', os.freemem());
// CPU 정보를 담은 객체를 리턴
console.log('cpus() : ', os.cpus());
// 네트워크 인터페이스 정보를 담은 배열을 리턴
console.log('getNetworkInterfaces() : ', os.getNetworkInterfaces());


