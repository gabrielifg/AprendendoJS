// Code 97 --> Video 111
/*
    * Conteúdo: * Map (Transforma um array)
                * Tem com função mapear um array para um array do mesmo tamanho e "transformar os dados"
*/

const nums = [1, 2, 3, 4, 5]

// for com propósito

let resultado = nums.map(function(e){
    return e * 2 // precisa de um retorno, pois o map tem um retorno implicito
    // .. se não for definido o valor se torna undefined
})

console.log(resultado, nums) // não altera o valor principal

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)