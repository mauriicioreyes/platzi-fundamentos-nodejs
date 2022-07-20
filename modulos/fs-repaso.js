const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data) => {
        callback(data.toString());
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido crear el archivo.', err);
        } else {
            console.log('Se ha escrito correctamente.')
        }
        
    });
}

function borrar(ruta, callback) {
    fs.unlink(ruta, (err) => {
        if (err) {
            console.error('Imposible eliminar.');
        } else {
            callback('Archivo eliminado correctamente.');
        }
    });
}

// leer(__dirname + '/archivo.txt', console.log);

// escribir(__dirname + '/archivo_nuevo.txt', 'Nuevo archivo\nHe sido creado desde código.\nDesde Lagos para el mundo 😎.', console.log);

borrar(__dirname + '/archivo_nuevo.txt', console.log);