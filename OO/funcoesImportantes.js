// Code 79 --> Video 95
/*
    * Conteúdo: *  Funções do objetos
*/

const pessoa = {
    nome: "Gabriel",
    idade: 19,
    peso: 61.5
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // leitor de chave e valor para poder obter suas características

Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
}) // desestruturando os elementos do objeto

// pode ser dessa forma também

// Object.entries(pessoa).forEach(e =>{
//     console.log(`${e[0]}: ${e[1]}`)
// })

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) // função para definir algumas propriedades

pessoa.dataNascimento = '01/01/2017' // não será atribuido por conta do freeze "writable"

console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)

const destino = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const objResultante = Object.assign(destino, o1, o2/*, ... */) // pegara todos os objetos e concatenará no objeto de destino
//... caso tenham o mesmo atributo, o atributo do "destino" terá seu valor sobrescrito
console.log(objResultante) // O objResultante é a concatenação de todos os outros objetos

Object.freeze(objResultante)
objResultante.c = 1234
console.log(objResultante)