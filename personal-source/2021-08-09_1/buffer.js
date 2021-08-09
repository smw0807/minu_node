const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
console.log('from():', buffer); //문자열을 버퍼로 바꿔줌 (바이트 단위)
console.log('length:', buffer.length); //버퍼의 크기
console.log('toString():', buffer.toString()); //버퍼를 다시 문자열로 바꿔줌(base64나, hex를 인수로 넣으면 해당 인코딩으로도 변환 가능하다.)

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array); //배열에 있는 버퍼들을 하나로 합침
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5); //바이트를 인수로 받아 해당 크기의 버퍼를 생성
console.log('alloc():', buffer3);