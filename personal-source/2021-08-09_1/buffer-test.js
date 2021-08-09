const fs = require('fs');

const readFile = fs.readFile('./readme3.txt', 'utf-8', function(err, data) {
  if (err) {
    console.error(err);
  }
  const buffer = Buffer.from(data);
  console.log('buffer : ', buffer);
  /** result
   * buffer :  <Buffer ec a0 80 eb 8a 94 20 ec a1 b0 ea b8 88 ec 94 a9 20 ec a1 b0 ea b8 88 ec 94 a9 20 eb 82 98 eb 88 a0 ec 84 9c 20 ec a0 84 eb 8b ac eb 90 a9 eb 8b 88 eb ... 49 more bytes>
   */
  console.log('toString : ', buffer.toString());
})
