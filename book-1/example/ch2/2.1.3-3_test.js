// { name: name, age: age } // ES5
// { name, age } // ES2015

let tt = 'es';
let test = {
  aa: 'a',
  bb: 'b',
  cc: 'c',
  [tt + '6']: '??'
};

let { aa, es6 } = test;
console.log(aa); //a
console.log(es6); //??
