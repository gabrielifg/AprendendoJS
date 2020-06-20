// Code 85 --> Video 101
/*
    * Conteúdo: *  Herança 06
                * Tendo uma função construtore e usa o New, não só o fato de criar um novo objeto é feito
                * ... mas também, o fato do prototipo do objeto criado aponta para função "Aula.prototype"
*/

function Aula(nome, videoId){
    this.nome = nome
    this.videoId = videoId
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new

function novo(f, ...params){ // recebe um conjunto de paramentros e concatena em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // executa a função f, passando o objeto de contexto e parametros
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)