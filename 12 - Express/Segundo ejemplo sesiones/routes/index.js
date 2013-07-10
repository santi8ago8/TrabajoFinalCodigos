
usuarios=['juan','pedro','jose','luca','baz','foo'];

exports.index = function(req, res){
    if (req.session.iniciada){
        res.render("index",{title:'Mi pagina web inicio',usuario:req.session.usuario});
    }
    else{
        res.render("login",{title:'Mi pagina web'});
    }
};

exports.salir=function(req,res){
    if (req.session.iniciada){
        delete req.session.iniciada;
        delete req.session.usuario;
    }
    res.writeHead(302,{"Location":'http://localhost:3000/'});
    res.end();
}

exports.login=function(req,res){
    if (usuarios.indexOf(req.body.usuario)!=-1){
        req.session.iniciada = true;
        req.session.usuario = req.body.usuario;
        res.writeHead(302,{"Location":'http://localhost:3000/'});
        res.end();
    }
    else{
        res.render("login",{title:'Usuario incorrecto'});
    }
}

exports.informacion=function(req,res){
    if (req.session.iniciada){
        res.render("informacion",{title:'Mi pagina web informacion',usuario:req.session.usuario});
    }
    else{
        res.render("login",{title:'Mi pagina web'});
    }
}
exports.contacto=function(req,res){
    if (req.session.iniciada){
        res.render("contacto",{title:'Mi pagina web contacto',usuario:req.session.usuario});
    }
    else{
        res.render("login",{title:'Mi pagina web'});
    }
}