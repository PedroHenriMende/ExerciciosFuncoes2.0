/*Nome: Pedro Henrique Mendes De Jesus
Exercício 4:
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.*/
console.clear();

const teclado = require('prompt-sync')();
function listaNumerosPrimos() {
    function essePrimo(numero): boolean {
        let i = 2;
        while (i < numero) {
            if (numero % i == 0) {
                return false;
            }
            i++;
        }
        return numero > 1;
    }

    let numerosPrimos = "0";
    let numero = 2;
    let primeiroPrimoEncontrado = false;
    while (numero <= 1000) {
        if (essePrimo(numero)) {
            if (primeiroPrimoEncontrado) {
                numerosPrimos += ", ";
            } else {
                primeiroPrimoEncontrado = true;
            }
            numerosPrimos += numero;
        }
        numero++;
    }
    return numerosPrimos;
}

console.log(listaNumerosPrimos());
