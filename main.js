var ligar = "acesa.png";
var desligar = "apagada.png";
var vermelho = "vermelho.png";
var azul = "azul.png";
var quebar = "quebrada.png";

function Ligarr() {
 document.getElementById("apagada").src = ligar;
}

function Desligar() {
 document.getElementById("apagada").src = desligar;
}

function Trocar() {
 document.getElementById("apagada").src = desligar;
}

function Cor() {
 document.getElementById("apagada").src = azul;
 let aux = vermelho 
 vermelho = azul
 azul = aux
}

function Quebrar () {
 document.getElementById("apagada").src = quebar;
}