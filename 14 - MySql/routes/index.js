
var mysql=require('mysql');

var conn=mysql.createConnection({
    user:'root',
    host:'localhost',
    port:'3306',
    database:'test'
});

conn.connect();

conn.query(
    "UPDATE personas SET nombre= 'Juan', apellido= 'Perez' where id=1",

    function(err,ress){
        if (err) console.log(err);
        console.log(ress);
    }
);

conn.query(
    "insert into personas(nombre,apellido) values('Lucas', 'Amieva')",

    function(err,info){
        if (err) console.log(err);
        console.log(info);
    }
);

conn.query(
    "delete from personas where id=1",

    function(err,ress){
        if (err) console.log(err);
        console.log(ress);
    }
);


exports.index = function(req, res){
    conn.query("select * from personas",function(err,rows){
        if (err) console.log(err);
        else res.render('index', { title: 'Express' , personas:rows });
    });
};





