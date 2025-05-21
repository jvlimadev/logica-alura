var numeroPensado = 5;
var chute = parseInt(prompt('Digite seu chute: '));

if(chute == numeroPensado) {
    console.log('Você Acertou!');
}

if(chute !== numeroPensado) {
    console.log('Você Errou! o número pensado foi ' + numeroPensado);
}