function soyAsincrona(miCallback) {
    console.log('Hola, soy una función asíncrona');
    setTimeout(function () {
        console.log('Estoy siendo asíncrona');
        miCallback();
    }, 1000);
}

console.log('Iniciando proceso ...');
soyAsincrona(function () {
    console.log('Terminando proceso ...');
});