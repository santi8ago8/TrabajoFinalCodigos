/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 21/03/13
 * Time: 20:00
 * To change this template use File | Settings | File Templates.
 */

var io = require('socket.io').listen(2020);

io.sockets.on('connection', function (socket) {  /* 1 */

    socket.on('servidor-ingreso', function (data) { /* 2 */
        if (data.usuario) {
            io.sockets.emit("cliente-nuevoUsuario", data); /* 3 */
            socket.usuario = data.usuario; /* 4 */
        }
    });

    socket.on('disconnect', function () { /* 5 */
        if (socket.usuario) {
            var data = {usuario: socket.usuario};
            io.sockets.emit("cliente-disconnectedUser", data); /* 6 */
        }
    })
});