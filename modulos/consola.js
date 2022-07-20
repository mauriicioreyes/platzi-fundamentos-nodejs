function func1() {
    console.group('Función 1');
    console.log('esto es de la función 1')
    console.log('esto también es de la función 1')
    func2();
    console.log('Volvemos a la función 1');
    console.groupEnd('Funcion 1');
}

function func2() {
    console.group('Funcion 2');
    console.log('estamos en la función 2');
    console.groupEnd('Funcion 2');
}

console.log('Empezamos');
func1();
console.log('Terminamos');