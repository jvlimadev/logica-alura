function pularLinha() {
  document.write('<br>');
}

function mostrar(frase) {
  document.write(frase);
}

var numeroSecreto = Math.round(Math.random() * 10);
var chute = parseInt(prompt('Informe seu chute'));

if(chute == numeroSecreto) {
  mostrar('Acertou!');
} else {
  mostrar('Errou');
}