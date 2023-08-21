// 3)Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
// O salário a ser transferido é calculado da seguinte maneira:

// Valor bruto do salário - porcentual de imposto mediante a faixa salarial + adicional dos benefícios 

// Para calcular o porcentual de impostos segue as alioquotas:

//      De R$ 0.00 a R$ 1100.00 = 5.00%
//      De R$ 1100.00 a R$ 2500.00 = 10.00%
//      Maior que R$ 2500.00 = 15.00%

//      Exemplo: 
//          Entrada: 
//              2000
//              250

//          Saída:
//              2050.00

const { gets, print} = require('./funcoes-auxiliares-ex003');

const valorBruto = gets();
const beneficios = gets();

function porcentagem(valor, percentual) {
    return valor * (percentual /100);
}

function percentualSalario(salario) {
    if (salario >= 0 && salario < 1100) {
        return 5;
    } else if (salario >= 1100.01 && 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotasSalario = percentualSalario(valorBruto);
const imposto = porcentagem(valorBruto, aliquotasSalario);

const valorTranferencia = valorBruto - imposto + beneficios;

print(valorTranferencia);