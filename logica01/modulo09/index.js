function sortearNumero() {
  return Math.round(Math.random() * 10);
}

function gerarListaDeNumeros(quantidade) {
  let numeros = [];
  let contador = 1;

  while (contador <= quantidade) {
    let numeroAleatorio = sortearNumero();
    if (numeroAleatorio !== 0) {
      let achou = false;

      for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] == numeroAleatorio) {
          achou = true;
          break;
        }
      }
      if (achou == false) {
        numeros.push(numeroAleatorio);
        contador++;
      }
    }
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

let segredos = gerarListaDeNumeros(10);
alert(segredos);
let input = document.querySelector("input");
input.focus();

var botao = document.querySelector("button");
botao.onclick = verificar;
