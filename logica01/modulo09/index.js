let segredos = [1,2,3,5];
let input = document.querySelector("input");
input.focus();

function verificar() {
    
  for(let i = 0; i < segredos.length; i++) {
    if (input.value == segredos[i]) {
      alert("Você Acertou!");
      break;
    }
  }
  input.value = '';
  input.focus();
}

var botao = document.querySelector('button');
botao.onclick = verificar;