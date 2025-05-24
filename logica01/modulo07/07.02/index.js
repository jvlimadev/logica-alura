function pularLinha() {
  document.write("<br>");
}

function mostrar(frase) {
  document.write(frase);
  pularLinha();
}

var quantidadeFamiliares = parseInt(
  prompt("Informe a quantidade de familiares")
);
var contador = 0;
var totalIdade = 0;

while (contador < quantidadeFamiliares) {
  var idade = parseInt(prompt('Informe a idade do familiar: '));  
  totalIdade += idade;
  contador++;
}

mostrar(totalIdade);