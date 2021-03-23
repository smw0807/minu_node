if (true) {
  var x = 3;
}
console.log(x); // 3
/**
 * var는 함수 스코프를 가지고 있어 if의 블록과 상관 없이 접근이 가능
 */
if (true) {
  const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined
/**
 * const와 let은 블록 스코프를 가지고 있어 블록 밖에서는 접근이 불가능 함
 * 또한 const는 한 번 값을 할당하면 다른 값을 할당할 수 없음
 */
