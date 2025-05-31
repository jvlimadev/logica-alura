let segredos = gerarListaDeNumeros(3);
let input = document.querySelector("input");
input.focus();

function sortearNumero() {
  return Math.round(Math.random() * 10);
}

function gerarListaDeNumeros(quantidade) {
  let numeros = [];
  let contador = 1;

  while(contador <= quantidade) {
    numeros.push(sortearNumero());
    contador++;
  }
  return numeros;
}

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
