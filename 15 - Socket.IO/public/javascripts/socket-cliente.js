/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 20/03/13
 * Time: 23:47
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(initSocket);  /* 1 */

function initSocket(){

    if ($("input[name='nombre']").val()!='undefined'){   /* 2 */

        var websocket=io.connect("http://localhost:2020"); /* 3 */

        var nombreUsuario=$("input[name='nombre']").val();
        websocket.emit('servidor-ingreso',{usuario:nombreUsuario}); /* 4 */

        websocket.on("cliente-nuevoUsuario",function(data){ /* 5 */
            var p = $("<P>" + data.usuario + "</P>"); /* 6 */
            p.addClass("newUser");                    /* 6 */
            $(".usuarios").append(p);                 /* 6 */
        }); //end
        websocket.on("cliente-disconnectedUser",function(data){  /* 7 */
            var p = $("<P>" + data.usuario + "</P>");    /* 8 */
            p.addClass("disconnectedUser");              /* 8 */
            $(".usuarios").append(p);                    /* 8 */
        }); //end
    }
}