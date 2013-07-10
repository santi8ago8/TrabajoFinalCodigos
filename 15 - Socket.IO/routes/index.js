
/*
 * GET home page.
 */


exports.index = function(req, res){
    res.render('index', { title: 'Express' ,nombre:req.session.nombre });
};

exports.saveUser=function(req,res){
    req.session.nombre=req.body.nombreIngreso;
    console.log("Usuario guardado: "+req.body.nombreIngreso);
    res.redirect("/");// redireccionamos al inicio.
};