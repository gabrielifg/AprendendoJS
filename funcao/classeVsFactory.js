// Code 69 --> Video 84
/*
    * Conteúdo: * Classe Vs Factory
                * BENEFICIO FUNÇÃO FACTORY :    NÃO precisa do THIS
*/

class Pessoa{
    constructor(nome){
        this.nome = nome // não tem ciência da declaração
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Gabriel")
p1.falar()

const criarPessoa = nome =>{
    return { // o objeto tem ciência do contexto lexico em que ele foi declarado
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Eduardo")
p2.falar()