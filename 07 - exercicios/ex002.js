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
let maiorValor = 0;
let menorImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (numero > maiorValor) {
            maiorValor = numero;
        }

    } else {
        if (menorImpar === 0) {
            menorImpar = numero;
        } else if(numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print('Maio número par: ' + maiorValor);
print('Menor número impar: ' + menorImpar);