let i = 1;
setInterval(() => {
  if(i===5) {
    console.log('종료!!');
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

let j = 1;
setInterval(() => {
  if (j===3) {
    console.log('j 종료');
    process.exit(1);
  }
  console.log('j:', j);
  j++;
}, 1000);