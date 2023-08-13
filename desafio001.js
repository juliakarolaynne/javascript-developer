/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - preço do combustível;
2 - gasto médio de combustível do carro por KM;
3 - distância em KM da viagem
*/

const precoCombustivel = 5.79;
const kmLitro = 12;
const distanciaKm = 491;

const litrosConsumidos = (distanciaKm / kmLitro) * precoCombustivel;

console.log(litrosConsumidos.toFixed(2));