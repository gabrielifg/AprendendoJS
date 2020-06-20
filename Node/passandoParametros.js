// Code 116.1 --> Video 132
/*
    * Conteúdo: * Passando parâmetros em modulos
*/

module.exports = function(...nomes){ // lista de nomes
    return nomes.map(nome => `Eae ${nome}`)
}