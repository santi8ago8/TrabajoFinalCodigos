/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 13/03/13
 * Time: 14:25
 * To change this template use File | Settings | File Templates.
 */

console.log('Fue iniciado el modulo foo.js');

function mostrarTexto(str){
    console.log("Texto: "+str);
    console.log("Cantidad de veces ejecutada: " + cantVecesEjecutada++);
}

var cantVecesEjecutada=1;

//de esta forma se exporta la función, es importante que no tenga los parentesis la función.
exports.mostrarTexto=mostrarTexto;

//el nombre con el cual se exporta no tiene que ser el mismo que tiene la función en el modulo.
//en este caso la exporte con el nombre log, pero la función se llama mostrarTexto.
exports.log=mostrarTexto;