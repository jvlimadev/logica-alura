<meta charset="UTF-8" />;

var ano = 2025;

var idadeBeatriz = 23;
var idadeJoao = 26;
var idadeGustavo = 18;

var nome = "Beatriz";
document.write(nome + " nasceu em " + (ano - idadeBeatriz) + "<br>");

nome = "João";
document.write(nome + " nasceu em " + (ano - idadeJoao) + "<br>");

nome = "Gustavo";

ano = 2026;
document.write(nome + " nasceu em " + (ano - idadeGustavo) + "<br>");

var media = (idadeBeatriz + idadeJoao + idadeGustavo) / 3;
document.write("A média das idades é: " + Math.round(media));
