const fs = require('fs');

const stream = require('stream');

const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// readableStream.setEncoding('utf8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function () {
//     console.log(data);
// });

// Escribiendo en el buffer de la salida estándar del sistema.
// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');
// process.stdout.write(':D');

const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chuck, codif, cb) {
    chuckMayus = chuck.toString().toUpperCase();
    this.push(chuckMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);