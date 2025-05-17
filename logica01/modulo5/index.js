function calcularImc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

function pularLinha() {
  document.write("<br>");
}

function mostra(frase) {
  document.write(frase);
  pularLinha();
}

var nomeInformado = prompt("Informe seu nome: ");
var pesoInformado = Number(prompt("Informe seu peso"));
var alturaInformada = Number(prompt("Informe sua altura"));
var imc = calcularImc(pesoInformado, alturaInformada);
mostra(`${nomeInformado} seu IMC é ${imc.toFixed(2)}`);
