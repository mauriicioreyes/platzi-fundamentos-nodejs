function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1500);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

// Función recursiva
function conversacion(nombre, veces, callback) {
    if(veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

// --

console.log('Iniciando proceso ...');
hola('Mauricio', function (nombre) {
    conversacion(nombre, 5, function() {
        console.log('Proceso terminado...')
    });
});

// hola('Carlos', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 hablar(function () {
//                     adios(nombre, function () {
//                         console.log('Terminando proceso ...');
//                     });
//                 });
//             });
//         })
//     });
// });