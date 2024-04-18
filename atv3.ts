/*Nome: Pedro Henrique Mendes De Jesus
Exercício 3:
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).*/
console.clear();

const teclado = require('prompt-sync')();

function calcVolEsfera(raioR) {
    const pi = 3.14;
    const volume = (4 / 3) * pi * (raioR * raioR * raioR);
    return volume;
}

let raEsfera = parseFloat(teclado("Digite o raio da esfera: "));
let volEsfera = calcVolEsfera(raEsfera);
console.log("O volume da esfera com raio", raEsfera, "é:", volEsfera);