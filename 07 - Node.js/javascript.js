/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 13/03/13
 * Time: 15:13
 * To change this template use File | Settings | File Templates.
 */


function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function operar(funcionOperadora,a,b){
    var resultado = funcionOperadora(a,b);
    console.log("Resultado: " + resultado);
}

operar(suma,2,5);
operar(resta,4,1);