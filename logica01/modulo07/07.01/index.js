function pularLinha() {
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

var anoCopa = 1930;
mostrar(`Teve copa em ${anoCopa}`);
anoCopa += 4;
mostrar(`Teve copa em ${anoCopa}`);
anoCopa += 4;
mostrar(`Teve copa em ${anoCopa}`);