const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    console.log('err');
    throw err;
  }
  console.log(data);
  console.log('--------');
  console.log(data.toString());
})

//promise 형식으로 사용하는 방법
const fs2 = require('fs').promises;

fs2.readFile('./readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
