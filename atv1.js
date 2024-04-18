/*Nome: Pedro Henrique Mendes De Jesus
Exercício 1:
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar 
console.clear();*/
console.clear();
var teclado = require("prompt-sync")();
function verificaDor(numero) {
    if (numero % 2 === 0) {
        return true; // número é par
    }
    else {
        return false; // número é ímpar
    }
}
var numeroUm = parseInt(teclado("Digite o primeiro numero"));
var nPar = verificaDor(numeroUm);
console.log("O n\u00FAmero digitado \u00E9 par? ".concat(nPar));
if (nPar === true) {
    console.log("O número digitado é par.");
}
else {
    console.log("O número digitado é ímpar.");
}
