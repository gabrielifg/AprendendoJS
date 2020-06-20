// Code 98 --> Video 112
/*
    * Conteúdo: * Map2 - Exercicio
*/

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]
// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenaPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenaPreco)
console.log(resultado)