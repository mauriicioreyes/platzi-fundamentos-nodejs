const http = require('http');

http.createServer(router).listen(3000);

function router(request, response) {
    console.log('Nueva petición!');
    console.log(request.url);

    switch (request.url) {
        case '/hola':
            response.write('Hola, que tal');
            response.end();
            break;
        default:
            response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8'});
            response.write('<h2>Error 404: Elemento no encontrado :(</h2>');
            response.end();
    }
    // Respuesta al usuario
    // response.writeHead(201, { 'Content-Type': 'text/plane' });
    // response.write('Hola, ya se usar HTTP de NodeJS');

    // response.end();
}

console.log('Escuchando http en el puerto 3000');