const test = require('./test2');
const { text, obj: { a, objf}, c} = test;

console.log(text);
console.log(a);
objf();
c();

