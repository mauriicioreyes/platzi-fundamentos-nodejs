// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar, ya casi me voy :(');
});

process.on('exit', () => {
    console.log('El proceso acabó, adiós :D');
    setTimeout(() => {
        console.log('Esto no se verá, ya que al salir nos desconectamos del Event Loop');
    });
}, 1000);

process.on('uncaughtException', (err, origen) => {
    console.error('Se nos olvido capturar un error...', err.message);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones (uncaughtException)');
    }, 1000);
});

// process.on('unhandleRejection')

setTimeout(() => {
    console.log('Esto se verá, ya que aún no salimos del Event Loop :D');
}, 0);

funcionQueNoExiste();