
/*
 * GET home page.
 */

var modelos=require("../modelos.js");
var mongoose=require("mongoose");

mongoose.connect("localhost","test",function(err){
    if (err) console.log(err);
});

var user=new modelos.Usuario(
    {
        usuario:"juanpablo",
        nombre:"juan",
        amigos:["lucas","mariano"]
    });

user.apellido='perez';


user.save(function(err){
    if (err) console.log(err);
    else console.log("usuario guardado");
});


modelos.Usuario.update(
    { usuario:"juanpablo" },
    {
        $pull:{
            comentarios:{coment:"Muy buen post!2" , idpost:45}
        }
    },
    { multi:true },
    function(err, numAffectedRows) {
        if (err) console.log(err);
        str=('filas afectadas: %d',numAffectedRows);
        console.log(str);
    }
);

modelos.Usuario.update(
    { usuario:"juanpablo" },
    {
        $push:{
            posts:{
                title:"    primerpost    ",
                post:'hola bienvenidos a mi primer post!!!'
            }
        }
    },
    function(err, numAffectedRows) {
        if (err) console.log(err);
        str=('filas afectadas: '+numAffectedRows);
        console.log(str);
    }
);

modelos.Usuario.find({},{usuario:'',_id:0},function(err,docs){
    if (err) console.log(err);
    console.log(docs);
});


modelos.Usuario.remove({usuario:'ejemplo'},function(err,numAffectedRows){
    if (err) console.log(err);
    console.log("Cantidad de filas afectadas por remove: "+numAffectedRows);
});

exports.index = function(req, res){
  res.render('index', { title: 'Express' });


};