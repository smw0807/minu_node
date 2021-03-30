/**
 * async/await 와 promise 확인해보고 싶은게 있어서 테스트 소스
 */
const time = 1;
function sleep (t) {
  return new Promise( (resolve, reject) => {
    const time = t * 1000;
    setTimeout(resolve, time);
  })
}

function test () {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('222'));
    }, 100);
  })
}

function test2 () {
  setTimeout( () => {
    console.log('22222222');
  }, 100)
}

(() => {
  console.log('익명 함수?');
})();

async function run () {
  console.log('------ test 1 ------');
  console.log('1');
  test();
  console.log('3');
  /** log...
   * 1
   * 3
   * 222
   * 프로미스를 사용해서 비동기를 해결하려면 async/await을 같이 사용해야함
   */
  await sleep(time);

  console.log('------ test 2 ------');
  console.log('1');
  await test();
  console.log('3');
  /** log...
   * 1
   * 222
   * 3
   */
  await sleep(time);

  console.log('------ test 3 ------');
  console.log('1');
  test2();
  console.log('3');
  /** log...
   * 1
   * 3
   * 22222222
   */
  await sleep(time);

  console.log('------ test 4 ------');
  console.log('1');
  await test2();
  console.log('3');
  /** log...
   * 1
   * 3
   * 22222222
   */
  await sleep(time);
}
run();