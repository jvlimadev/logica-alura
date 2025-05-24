function pularLinha() {
  document.write("<br>");
}

function mostrar(frase) {
  document.write(frase);
  pularLinha();
}

var numeroPensado = Math.round(Math.random() * 10);
alert(numeroPensado)
var chute = parseInt(prompt("Digite seu chute: "));

if (chute == numeroPensado) {
  mostrar("Você Acertou!");
} else {
  mostrar("Você Errou! o número pensado foi " + numeroPensado);
}
