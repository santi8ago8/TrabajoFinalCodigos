/**
 * Created with JetBrains WebStorm.
 * User: SantiagoPC
 * Date: 24/03/13
 * Time: 01:19
 * To change this template use File | Settings | File Templates.
 */


var util = require('util');

console.log(util.format("nombre: %s","juan"));
console.log(util.format("nombre: %s, %s","juan","perez"));
console.log(util.format("nombre: %s, %s edad: %d","juan","perez",20));
console.log({nombre:'juan',apellido:'perez'});

