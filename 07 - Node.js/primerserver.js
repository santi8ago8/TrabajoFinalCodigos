/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 12/03/13
 * Time: 20:50
 * To change this template use File | Settings | File Templates.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(ejecutar);
server.listen(3000,'127.0.0.1');
console.log('Servidor escuchando');

function ejecutar(peticion,respuesta){
    switch (peticion.url){
        case '/':
        case '/index': enviarArchivoACliente('archivos/index.html',respuesta); break;
        case '/contacto': enviarArchivoACliente('archivos/contacto.html',respuesta); break;
        case '/info': enviarArchivoACliente('archivos/info.html',respuesta); break;
        default : enviarArchivoACliente('archivos/404.html',respuesta); break;
    }
}
function enviarArchivoACliente(path, respuesta) {
    fs.readFile(path,function(err,data){
        if (err)
            respuesta.end('Error de servidor');
        else
            respuesta.end(data);
    });
}