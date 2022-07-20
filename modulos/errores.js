function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

try {
    otraFuncion();
} catch(err) {
    console.error('Vaya, algo se ha roto... ', err.message);
    console.error(err);
}

console.log('Elemento al final');