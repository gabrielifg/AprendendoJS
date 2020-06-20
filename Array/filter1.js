// Code 100 --> Video 114
/*
    * Conteúdo: * filter (fitrar "x" de um array)
*/


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 6000, fragil: true},
    {nome: 'Copo de Vidro', preco: 15.00, fragil: true},
    {nome: 'Copo de Plastico', preco: 5.00, fragil: false},
]


// console.log(produtos.filter(function(p){
//     return p.preco > 2500
// }))


const produtoCaro = produtos => produtos.preco > 500



const produtoFragil = produtos => produtos.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil))