function soyAsincrona() {
    console.log('Hola, soy una función asíncrona');
    setTimeout(function () {
        console.log('Estoy siendo asíncrona');
    }, 1000);
}

console.log('Iniciando proceso ...')
soyAsincrona();
console.log('Terminando proceso ...')