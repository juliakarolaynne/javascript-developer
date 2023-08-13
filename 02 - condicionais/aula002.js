const numero = 45;

const numeroDivisivel5 = (numero % 5) === 0;
console.log(numero)

if (numero === 0) {
    console.log(' O número é inválido')
} else if (numeroDivisivel5) {
    console.log('Sim')
} else {
    console.log('Não')
}
