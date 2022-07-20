const { exec, spawn } = require('child_process');
// const exec = require('child_process').exec;

// exec('node modulos/consola.js', (err, stdout, sterr) => {
//     if (err) {
//         console.error('Error:', err.message);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-lah']);
console.log('PID del proceso', proceso.pid);
console.log('Proceso conectado', proceso.connected);

proceso.stdout.on('data', function (dato) {
    console.log('Proceso muerto', proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', function () {
    console.log('El proceso terminó');
    console.log('Proceso muerto', proceso.killed);
})