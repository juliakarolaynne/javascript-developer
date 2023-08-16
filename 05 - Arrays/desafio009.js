// 1) crie um programa que dado um número imprima a sua tabuada.
const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);  
}

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado
const number = [0,1,2,3,4,5,6,7,8,9,10];

for (let a = 0; a < number.length; a++) {
    const numeros = number[a];
    if (numeros % 2 === 0) {
        console.log(numeros);
    }
}