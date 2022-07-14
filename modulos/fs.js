const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            console.error('No se ha podido escribir', err);
        } else {
            console.log('Se ha escrito el archivo correctamente');
        }
    });
}

leer(__dirname + '/archivo.txt', console.log);

escribir(__dirname + '/archivo_escrito.txt', 'Soy un archivo nuevo creado desde código.', console.log);