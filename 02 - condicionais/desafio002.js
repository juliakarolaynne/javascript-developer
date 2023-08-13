/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas: 
    1 - Preço do etanol;
    2 - Preço da gasolina;
    3 - O tipo do combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar está viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmLitro = 10;
const distanciaKm = 100;
const combustivel = 'Gasolina';
const litrosConsumidos = (distanciaKm / kmLitro);

if (combustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}





