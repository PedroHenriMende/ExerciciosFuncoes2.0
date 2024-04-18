/*Nome: Pedro Henrique Mendes De Jesus
Exercício 1:
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar 
console.clear();*/

const teclado = require (`prompt-sync`)();
function verificaDor(numero): boolean{
    if (numero % 2 == 0) {
        return true; // número é par
    } else {
        return false; // número é ímpar
    }
}
let numeroUm: number = parseInt(teclado(`Digite o primeiro numero`));
let nPar = verificaDor(numeroUm);

console.log(`O número digitado é par? ${nPar}`);

if (nPar == true) {
    console.log("True então é Par.");
} else {
    console.log("False então é Ímpar.");
}