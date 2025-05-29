function verificar() {
  let segredo = 5;

  let input = document.querySelector("input");
  input.value;

  if (input.value == segredo) {
    alert("Você Acertou!");
  } else {
    alert("Você Errou!");
  }
  input.value = '';
  input.focus();
}

var botao = document.querySelector('button');
botao.onclick = verificar;