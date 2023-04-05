const fs = require('fs');

const readStream = fs.createReadStream('test');
const writeStream = fs.createWriteStream("test2")

readStream.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});
readStream.pipe(writeStream)