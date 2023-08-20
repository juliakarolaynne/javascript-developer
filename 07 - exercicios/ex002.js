//  Faça um programa que recebe N (quantidade de números) e seus respectivos valores 
//  Imprima o maior número par e o menor número impar.

//        Exemplo:
//            Entrada: 
//                5 
//                3
//                4
//                1
//                10
//                8

//        Saída:

//            Maior número par: 10
//            Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex002');

const n = gets();
let maiorValor = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorValor === null || numero > maiorValor) {
            maiorValor = numero
        }
    } else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print('Maio número par: ' + maiorValor);
print('Menor número impar: ' + menorImpar);