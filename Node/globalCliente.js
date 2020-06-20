// Code 114 --> Video 130
/*
    * Conteúdo: * Global em node
                * Objeto (que possui atributos) está está aberto para mudanças
                * ... em todos os modulos do projeto
*/
require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eduardo' // Object.freeze() para impedir que isso aconteça
console.log(MinhaApp.nome)