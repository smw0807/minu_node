exports.test1 = async (a) => {
    console.log('test1', a);
    let ss = await this.test2('bbbbb');
    console.log('ss : ', ss);
};

exports.test2 =  (a) => {
    console.log('test2', a);
    return new Promise( (resolve, reject) => {
        if (a) {
            resolve('1111');
        } else {
            reject('22222');
        }
    });
}

this.test1('aaaaa');