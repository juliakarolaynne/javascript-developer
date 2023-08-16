const funcoes = require('./funcoes-auxiliares');

console.log(funcoes);

//Object Destructuring

/*
    Uma sala contem 5 alunos e para cada um foi sorteado um número de 1 - 100.
    Faça um programa que recebe os 5 números sorteados para os alunos e mostra o maior valor sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98
*/
const { gets, print } = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorValorEncontado = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    const numerosSorteado = gets();
    if (numerosSorteado > maiorValorEncontado) {
        maiorValorEncontado = numerosSorteado;
    }
}

print(maiorValorEncontado);


