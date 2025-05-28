function pularLinha() {
  document.write('<br>');
}

function mostrar(frase) {
  document.write(frase);
  pularLinha();
}


var numeroSecreto = Math.round(Math.random() * 10);
var chute;
var tentativas = 1;
while(tentativas <= 3) {
  chute = parseInt(prompt('Informe seu chute'));

  if(chute == numeroSecreto) {
    mostrar('Você Acertou!, o número secreto era ' + numeroSecreto);
    break;
  } else {
    mostrar('Você Errou!');
  }
  tentativas++;
}

mostrar('FIM');