// Code 25 --> Video 37
/*
    * Conteúdo: *Objetos vs função
*/

console.log(typeof Object)
console.log(typeof new Object) 

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente) // assim já tem um instância Cliente()

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
