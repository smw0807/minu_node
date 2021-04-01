const text = 'text';
const obj = {
  a: 'a',
  objf() {
    console.log('obj/obj()');
  },
}
function a () {
  console.log('a()');
}

module.exports = {
  "text": text,
  "obj": obj,
  "c": a
}