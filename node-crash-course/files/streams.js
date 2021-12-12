const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog2.txt')
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//     console.log('-----new chunk-----')
//     console.log(chunk.toString)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk);
// })

//piping

readStream.pipe(writeStream)