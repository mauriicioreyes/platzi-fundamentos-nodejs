const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function (chunk) {
    console.log(chunk);
})