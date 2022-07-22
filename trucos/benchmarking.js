console.time('proceso_general');
let suma = 0;
console.time('Ciclo 1');
for (let i = 0; i < 10000; i++) {
    suma += 1;
}

console.log('Suma 1', suma);
console.timeEnd('Ciclo 1');

let suma2 = 0;
console.time('Ciclo 2');
for (let j = 0; j < 10000; j++) {
    suma2 += 1;
}

console.log('Suma 2', suma2);
console.timeEnd('Ciclo 2');

console.time('async');
console.log('Empieza el proceso async');
asincrona()
    .then(() => {
        console.timeEnd('async');
    });

console.timeEnd('proceso_general');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asíncrono');
            resolve();
        }, 0);
    });
}