/**
 * 프로미스로 setTimout 처리하는거 결과 한번 보고 싶어서 만들어봄
 */
// function test () {
//     setTimeout(function() {
//         console.log('222');
//     }, 1000);
        
// }
// console.log('1');
// test();
// console.log('3');

function test () {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve(console.log('22222'));
            return console.log('22');
            // console.log('222');
        }, 1000);
    })
        
}
async function testttt () {
    console.log('1');
    let tt = await test();
    console.log('3');
}
testttt();