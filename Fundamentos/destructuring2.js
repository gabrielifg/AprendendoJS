// Code 30 --> Video 42
/*
    * Conteúdo: * Destructuring 2
                * Novo Recurso do ES2015 
*/

const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[6,8,9], [7,8,9]]
console.log("Segundo elemento do Segundo aray ...", nota)