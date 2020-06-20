// Code 101 --> Video 115
/*
    * Conteúdo: * filter proprio
*/

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

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