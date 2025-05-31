let segredo = Math.round(Math.random() * 10);
let input = document.querySelector("input");
input.focus();

function verificar() {
    
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