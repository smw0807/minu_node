const test = require('./test2').default;
const { text, obj: { a, objf}, c} = test;

console.log(text);
console.log(a);
objf();
c();

