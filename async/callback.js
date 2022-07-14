function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log('Hola ' + nombre);
        miCallback();
    }, 1000);
}

console.log('Iniciando proceso ...');
hola('Carlos',function () {
    console.log('Terminando proceso ...');
});