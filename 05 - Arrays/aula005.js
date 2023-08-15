/* const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[4] = 'Vinícius';

console.log(alunos);

console.log(alunos.pop); */ 

/*const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

console.log(notas.length);

console.log(soma / 5);*/

/*for (let i = 0; i < 10; i++) {
    
    console.log(i);
    
}*/

/*const nome = 'Vitor Johansen Guerra';

for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra);
}*/

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma /notas.length
console.log(media);