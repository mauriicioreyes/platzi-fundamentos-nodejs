let nombre = process.env.NOMBRE || 'DESCONOCIDO :/';
let web = process.env.WEB || 'N/A';

console.log('Hola ' + nombre);
console.log('Tu página web es ' + web);