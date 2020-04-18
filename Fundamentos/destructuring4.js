// Code 32 --> Video 44
/*
    * Conteúdo: * Destructuring 4
                * Novo Recurso do ES2015 
*/

function rand ([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([993]))
console.log(rand([ , 10]))
console.log(rand([]))
