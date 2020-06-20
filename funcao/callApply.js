// Code 72 --> Video 87
/*
    * Conteúdo: * Call e Apply
                * A diferença é a passagem de parâmetro
                * Call: Passa cada um dos parâmetros, sempre o primeiro é o contexto // Diretamente dentro da função
                * Já o Apply: Passa primeiro o contexto e depois os parâmetros por um array // Dentro de um array
*/

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4566,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Chamando somente assim da erro por conta do contexto lexicoem que os parametros que as variaeis do getPreco está inserida. Por isso a solução acima

console.log(produto.getPreco())

const carro = {preco: 456789, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco,call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))