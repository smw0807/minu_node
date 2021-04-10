const t2 = require('./test2');
console.log(t2.a);
t2.b();

console.log('------------------');
const {a, b} = require('./test2');
console.log(a);
b();