function pularLinha() {
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

var vitorias = prompt('Informe o número de vitórias: ');
var empates = prompt('Informe o número de empates: ');
var pontos = vitorias * 3 + empates;
