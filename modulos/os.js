const os = require('os');

console.log('\nArquitectura:', os.arch());
console.log('\nPlataforma:', os.platform());
console.log('\nProcesadores:', os.cpus());
console.log('\nCantidad de Procesadores:', os.cpus().length);
console.log('\n', os.constants);

const SIZE = 1024;
const bytes_disp = os.freemem();
const bytes_total = os.totalmem();

function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log('\nBytes:', bytes_disp);
console.log('\nKilobytes:', kb(bytes_disp));
console.log('\nMegabytes:', mb(bytes_disp));
console.log('\nGigabytes:', gb(bytes_disp));

console.log('\nEspacio Disponible:', gb(bytes_disp));
console.log('Espacio Total:', gb(bytes_total));

console.log('\nRaíz:', os.homedir());
console.log('\nTemporal:', os.tmpdir());

console.log('\nHostname:', os.hostname());

console.log('\nNetwork Interfaces:', os.networkInterfaces());