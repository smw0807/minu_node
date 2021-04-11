// console.log(process);
console.log('process.arch :', process.arch); // 프로세서 아키텍처 정보
console.log('process.platform : ', process.platform); //운영체제 플랫폼 정보
console.log('process.version : ', process.version); // 설치된 노드 버전
console.log('process.pid : ', process.pid); // 현재 프로세서의 아이디
console.log('process.uptime() : ', process.uptime()); //프로세스가 시작된 후 흐른 시간 (단위: 초)
console.log('process.execPath : ', process.execPath); // 노드의 경로
console.log('process.cwd() : ', process.cwd()); // 현재 프로세스가 실행되는 위치
console.log('process.cpuUsage() : ', process.cpuUsage()); // 현재 cpu 사용량