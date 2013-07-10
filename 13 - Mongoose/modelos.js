/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 20/03/13
 * Time: 12:33
 * To change this template use File | Settings | File Templates.
 */


var mongoose=require("mongoose");

var esquema=mongoose.Schema(
    {
        usuario:'string',
        nombre:'string',
        apellido:'string',
        amigos:'array',
        comentarios:[
            {
                coment:'string',
                date :{type:"date", default:Date.now},
                idpost:'string'
            }
        ],
        posts:[
            {
                title:{type:'string',uppercase:true,trim:true},
                post:'string',
                visitas:{type:'number',default:0},
                date :{type:'date', default:Date.now }
            }
        ]
    }
);

var Usuario=mongoose.model("Usuario",esquema);

exports.Usuario=Usuario;

