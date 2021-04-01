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

export default {
  "text": text,
  "obj": obj,
  "c": a
}