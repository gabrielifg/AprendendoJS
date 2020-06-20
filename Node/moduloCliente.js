// Code 108.3final --> Video 123
/*
    * Conteúdo: * Modulos Node
                * Meneira de exportar para esse modulo ser usado em outro arquivo
*/

const moduloA = require('./moduleA')
const moduloB = require('./moduleB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)