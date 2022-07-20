function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona() {
    setTimeout(function () {
        return 10 + x;
    }, 1000);
}

try {
    // otraFuncion();
    seRompeAsincrona();
} catch(err) {
    console.error('Vaya, algo se ha roto... ', err.message);
    console.error(err);
}

console.log('Elemento al final');