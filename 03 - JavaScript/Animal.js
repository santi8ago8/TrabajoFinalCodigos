/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 22/03/13
 * Time: 17:47
 * To change this template use File | Settings | File Templates.
 */

var Animal = function(nombre){
    this.nombre=nombre; //atributo publico
    var vecesQueHaCorrido=1;  //variable privada

    this.correr=function(){  //funcion publica correr
        console.log(nombre+" corriendo por: "+vecesQueHaCorrido++ +" vez");
    }
    this.getVecesQueHaCorrido=function(){
        return vecesQueHaCorrido;
    }
    function privada(){
        //Función privada
    }
}

var gatito=new Animal("Kat",2.5);

gatito.correr();
gatito.correr();
gatito.correr();

console.log(gatito.getVecesQueHaCorrido());

console.log(gatito);