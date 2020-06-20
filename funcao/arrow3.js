// Code 58 --> Video 73
/*
    * Conteúdo: * Arrow function
                * Dois Objetivos: Ser mais curta (sintaxe menor)
                * E ter um THIS associado ao seu contexto
                * This em uma função arrow está associado ao contexto em que a função foi escrita
*/

let comparaComThis = function(param){
    console.log(this == param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


comparaComThisArrow = comparaComThisArrow.bind(obj) // mesmo que forçando a troca de contexto o ARROW se mantem, e não troca para o contexto do bind
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)