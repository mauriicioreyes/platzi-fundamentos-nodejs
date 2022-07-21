const http = require('http');

http.createServer(function (request, response) {
    console.log('Nueva petición!');
    console.log(request.url);

    // Respuesta al usuario
    response.writeHead(201, { 'Content-Type': 'text/plane'});
    response.write('Hola, ya se usar HTTP de NodeJS');

    response.end();
}).listen(3000);

console.log('Escuchando http en el puerto 3000');