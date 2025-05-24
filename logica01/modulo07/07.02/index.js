function pularLinha() {
    document.write("<br>");
}

function mostrar(frase) {
    document.write(frase);
    pularLinha();
}

var idadePedro = 28;
var idadeMaria = 32;
var idadeJorge = 60;
var idadeBete = 22;

var totalIdades = idadePedro + idadeMaria + idadeJorge + idadeBete;
var mediaIdades = totalIdades / 4;

mostrar(mediaIdades);