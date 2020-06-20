// Code 86 --> Video 102
/*
    * Conteúdo: *  Possiveis modos para "prender" algumas partes do seu objeto
*/

// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca' // não pode adicionar
delete produto.tag // pode excluir
console.log(produto)

// Object.seal (não pode adicionar nem remover atributo mas pode alterar os valores)

const pessoa = {nome: 'Gabriel', idade: 18}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Eduardo' // não vai acontecer, pois o atributo não existe
delete pessoa.nome // não vai acontecer também
pessoa.idade = 19 // isso pode acontecer (alterar valores)
console.log(pessoa)

// Object.freeze = selado + valores constantes
