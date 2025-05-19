function pularLinha() {
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

var vitorias = parseInt(prompt('Informe o número de vitórias: '));
var empates = parseInt(prompt('Informe o número de empates: '));
var pontos = vitorias * 3 + empates;

mostrar(pontos);
