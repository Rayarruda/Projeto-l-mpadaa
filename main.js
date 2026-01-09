var ligar = "acesa.png";
var desligar = "apagada.png";
var vermelho = "vermelho.png";
var azul = "azul.png";
var quebar = "quebrada.png";


let estado = "desligado"

function Ligarr() {
 
 if (estado === "quebrado") {
  alert("Você não pode ligar uma lâmpada quebrada, troque antes!");
  estado = "quebrado";
  
 } else if (estado === "Mudado") {
  alert("A lâmpada ja está acesa, mas com outra cor!")
  
 } else {
  document.getElementById("apagada").src = ligar;
  estado = "ligar";
 }
 
}

function Desligar() {
 if (estado === "quebrado") {
  alert("Você não pode desligar uma lâmpada quebrada, troque antes!");
  estado = "quebrado";
 } else {
 document.getElementById("apagada").src = desligar;
 estado = "desligado"
}}

function Trocar() {
 document.getElementById("apagada").src =
 desligar;
 estado = "trocado"
}

function Cor() {
 
 if (estado === "desligado") {
  alert("Você precisa ligar antes!")
  
 } else if (estado === "quebrado") {
  alert("Luz quebrada, troque antes!")
  
 } else {
 document.getElementById("apagada").src = azul;
 let aux = vermelho 
 vermelho = azul
 azul = aux
 estado = "Mudado"
 }
}

function Quebrar () {
 document.getElementById("apagada").src = quebar;
 estado = "quebrado";
}