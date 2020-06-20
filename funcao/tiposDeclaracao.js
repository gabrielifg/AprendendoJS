// Code 64 --> Video 79
/*
    * Conteúdo: * Tipos de Declaração
*/
console.log(soma(8, 0))
// function declaration //// você pode chamar a função antes mesmo de declarar pois o interpretador carrega as funções primeiro

function soma(x, y){
    return x + y
}

// Nesses dois casos abaixo não funciona pois é preciso primeiro declarar
// function expression

const sub = function(x, y){
    return x - y
}

console.log(sub(8-5))

// named function expression
const multi = function mult(x, y){
    return x * y
}

console.log(multi(4, 3))