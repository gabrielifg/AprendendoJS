// Code 70 --> Video 85
/*
    * Conteúdo: * Factory  Vs Função construtora
*/

// Função Factory

const criarPessoa = nome =>{
    return { // o objeto tem ciência do contexto lexico em que ele foi declarado
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Eduardo")
p2.falar()





// função construtora

function criarPessoa2(nome){
    this.nome = nome
    // Com o this você consegue ter acesso a variável fora da função
    // metodo publico
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new criarPessoa2("Gabriel")
p3.falar()
console.log(p3.nome)