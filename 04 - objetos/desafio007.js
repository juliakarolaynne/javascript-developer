/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoPercurso(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioKm *precoCombustivel;
    }

}

const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno)

console.log(uno.calcularGastoPercurso(70, 5));

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio)

console.log(palio.calcularGastoPercurso(70, 5))