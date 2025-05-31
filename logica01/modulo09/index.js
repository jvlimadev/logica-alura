let segredos = [1, 2, 3, 5];
let input = document.querySelector("input");
input.focus();

function verificar() {
  let achou = false;

  for (let i = 0; i < segredos.length; i++) {
    if (input.value == segredos[i]) {
      alert("Você Acertou!");
      achou = true;
      break;
    }
  }

  if (achou == false) {
    alert("Você Errou!");
  }
  input.value = "";
  input.focus();
}

var botao = document.querySelector("button");
botao.onclick = verificar;
