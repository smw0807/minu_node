const crypto = require('crypto');

const pw = 'password';

const hash = {
  md5_base64 : crypto.createHash('md5').update(pw).digest('base64'),
  md5_hex : crypto.createHash('md5').update(pw).digest('hex'),
  // md5_latin1 : crypto.createHash('md5').update(pw).digest('latin1'),

  sha256_base64 : crypto.createHash('sha256').update(pw).digest('base64'),
  sha256_hex : crypto.createHash('sha256').update(pw).digest('hex'),
  // sha256_latin1 : crypto.createHash('sha256').update(pw).digest('latin1'),

  sha512_base64 : crypto.createHash('sha512').update(pw).digest('base64'),
  sha512_hex : crypto.createHash('sha512').update(pw).digest('hex'),
  // sha512_latin1 : crypto.createHash('sha512').update(pw).digest('latin1')
}

let key = Object.keys(hash);
for (key in hash) {
  console.log(`${key} \t : \t ${hash[key]}`);
  // console.log(key + ' \t : \t ' + hash[key]);
}