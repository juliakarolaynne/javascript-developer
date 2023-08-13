function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Julia');
sayMyName('Vitor');

function quadrado(valor) {
    return valor * valor;
}

const quadradoDez = quadrado(10);
console.log(quadradoDez);

function incrementarJuros(valor, percentualJuros) {
    const valorAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorAcrecimo;
}

console.log(incrementarJuros(100, 10))

// Organização de uma função

function main() {
    console.log('Programa principal')
}

main()

// Exemplo prático usando o desafio004.js

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Peso normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Obeso');
    } else {
        return ('Obesidade Grave');
    }
}

//Main
(function () {
    const peso = 49;
    const altura = 1.58;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();




