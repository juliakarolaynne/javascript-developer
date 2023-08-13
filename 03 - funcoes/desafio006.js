//Função escrever nome
function escrevaMeuNome(nome) {
    console.log('meu nome é ' + nome);
}

escrevaMeuNome('Julia');

//verificando idade
function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Parabens você já pode ser preso...')
    } else {
        console.log('Como é ainda poder ser bancado pelos pais???')
    }
}

verificarIdade(18)

//calcular preço
function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)));
}

const precoEtiqueta = 100;
const pagamento = 4;

if (pagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (pagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (pagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}





