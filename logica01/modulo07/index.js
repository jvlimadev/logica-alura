function pularLinha() {
  document.write("<br>");
}

function mostrar(frase) {
  document.write(frase);
  pularLinha();
}

var numeroPensado = 5;
var chute = parseInt(prompt("Digite seu chute: "));

if (chute == numeroPensado) {
  mostrar("Você Acertou!");
} else {
  mostrar("Você Errou! o número pensado foi " + numeroPensado);
}
