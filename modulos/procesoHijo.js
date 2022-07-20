const { exec } = require('child_process');
// const exec = require('child_process').exec;

exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error('Error:', err.message);
        return false;
    }

    console.log(stdout);
});