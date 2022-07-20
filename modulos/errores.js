function seRompe() {
    return 3 + z;
}

try {
    seRompe();
} catch(err) {
    console.error('Vaya, algo se ha roto... ', err.message);
    console.error(err.message);
}

console.log('Elemento al final');