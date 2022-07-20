function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(callback) {
    setTimeout(function () {
        try {
            return 10 + x;
        } catch (err) {
            console.error('Error en función asíncrona...', err.message);
            callback(err);
        }
    }, 1000);
}

try {
    // otraFuncion();
    seRompeAsincrona(function (err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya, algo se ha roto... ', err.message);
    console.error(err);
}

console.log('Elemento al final');