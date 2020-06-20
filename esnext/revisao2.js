// Code 124 --> Video 146
/*
    * Conteúdo: * Arrow Function
                * this em Arrow function e funções normais
                * parametros default / padrão
                * operador rest (vários parâmetros passados na função agrupados em um array)
*/


// Arrow Function -> são funções anônimas 
// ou seja, você vai criar a função e atribuir ela a uma variável(const)

const soma = (a, b) => a + b
console.log(soma(2, 3))


// Arrow function (this)
// this na função arrow está associado ao local no qual ela foi escrita

const lexico1 = () => console.log(this == exports) // == module.exports
const lexico2 = lexico1.bind ({})
lexico1()
lexico2()

// funções normais o this aponta para global. Então nesse caso, ...
// ... o lexico1 apontaria para o contexto que foi atribuido e não mais para o global
// Ou seja, em funções normais o this pode variar de acordo com a chamada da funçãos... mudando o seu contexto

// parametros default

function log(texto = 'Node'){ // caso nãos seja passado nada como parâmetro, a propria função usa o valor definido como padrão
    // nesse caso, undefined e vazio são mais fracos

    console.log(texto)
}

log(undefined) // node
log() // node
log(null) // null
log("Sou mais forte")

// operador rest(agrupar em array)

function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5))