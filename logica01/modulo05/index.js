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

if (imc < 17) {
  mostra('Seu imc está abaixo do peso ideal');
}
if (imc >= 18.5 && imc <= 25) {
  mostra('Seu imc está no peso ideal');
}
if (imc > 25) {
  mostra('Seu imc está acima do peso ideal');
}