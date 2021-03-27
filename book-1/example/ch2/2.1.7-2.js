const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('성공');
  } else {
    reject('실패');
  }
});
promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      console.log('11', message);
      resolve(message + '?');
    });
  })
  .then((message2) => {
    // console.log(message2);
    return new Promise((resolve, reject) => {
      console.log('22', message2);
      resolve(message2 + '!');
    });
  })
  .then((message3) => {
    console.log(message3);
  })

  .catch((error) => {
    console.error(error);
  });
