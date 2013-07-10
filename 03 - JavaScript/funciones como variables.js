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