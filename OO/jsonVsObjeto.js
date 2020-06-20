// Code 89 --> Video 103
/*
    * Conteúdo: *  JSON (Formato textual - Notação objeto JS)
                * JSON é um formato de dados e preve a interopelabilidade do sistema
                * ... ou seja, o JSON não carrega com sigo caracteristicas com FUNCAO
                * ... e serve para comunicar sistemas que podem ser feito em qualquer tecnologia
*/


const obj =  {a: 1, b: 2, c: 3, soma() {return a + b + c}}

console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))