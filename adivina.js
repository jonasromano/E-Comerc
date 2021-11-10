var random = 0;
var vidas = 10;
var numero
function numAleatorio() {
    random = Math.floor(Math.random() * 100);
}
 
function checkNumber() {
   numero = document.getElementById("numero").value;
    if (numero < random){
        alert("Incorrecto, su numero es menor" +random);
    vidas -= 1;
}
if (numero > random){
    alert("Incorrecto, su numero es mayor"+random);
vidas -= 1;
}
    if (vidas == 0){
        alert("Fin del juego")
    }
    if(numero == random){
        alert("Correcto")
    }
}
let tijera
let piedra
let papel
let aleratorio 
function pipate(){
    aleratorio= Math.floor(Math.random() * 3);
tijera= document.getElementById("gridRadios3");
piedra=document.getElementById("gridRadios1");
papel=document.getElementById("gridRadios2");
if(aleratorio == 3 && tijera === aleratorio){
    alert("Empate")
}
if(aleratorio == 3 && piedra === aleratorio){
    alert("Perdio")
}
if(aleratorio == 3 && papel=== aleratorio){
    alert("Gano!")
}
}