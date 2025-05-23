function pularLinha() {
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

var anoCopa = 1930;

for(let i = anoCopa; i <= 2025; i += 4 ) {
    mostrar(`Teve copa em ${i}`);
}