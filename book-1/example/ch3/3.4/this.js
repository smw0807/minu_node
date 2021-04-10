console.log(this);
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis() {
  console.log('function', this === exports, this === global);
}
whatIsThis();

/** 결과
 * {}
 * true
 * true
 * 
 * function false true
 */