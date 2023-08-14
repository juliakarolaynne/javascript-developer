//Criando instância com construtor
class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


//Função recebendo objeto
function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const maria = new Pessoa('Maria', 14);
const vitorya = new Pessoa('Vitorya', 14);

compararPessoas(maria, vitorya)

const vitor = new Pessoa('Vitor', 26);

vitor.descrever();

console.log(vitor);

const julia = new Pessoa('Julia', 18);

console.log(julia);

julia.descrever();


//Criando classes e instâncias
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

pessoa.altura = 1.69;

console.log(pessoa);

console.log(pessoa['nome'])

