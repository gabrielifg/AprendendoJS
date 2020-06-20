// Code 111 --> Video 126
/*
    * Conteúdo: * exportar
                * Sempre que você quiser atribuir um objeto que precisa ser importado
                * ... obrigatóriamente precisa do module.exports
*/
console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
// exports.b = 2
module.exports.c = 3
exports = null // não será alterado
console.log(module.exports)
// exports = {
//     nome: 'Teste'
// } // não será alterado

console.log(module.exports)
module.exports = {publico: true} 

