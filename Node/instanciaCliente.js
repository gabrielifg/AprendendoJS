// Code 113.final --> Video 129
/*
    * Conteúdo: * É preciso envocar a função factory
*/

const contadorA = require('./instanciaUnicia')
const contadorB = require('./instanciaUnicia')

const contadorC = require('./instanciaNova')() // use factory para nova instânicia
const contadorD = require('./instanciaNova')()

// como exportei um objeto e não uma nova intância, o node faz cache dos dados
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor) // node faz cache

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)