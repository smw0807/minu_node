/**
 * 대용량 파일 buffer로 처리시 메모리 사용량 체크
 */
const fs = require('fs');
console.log('befor : ', process.memoryUsage().rss);
const data = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data);
console.log('buffer: ', process.memoryUsage().rss);