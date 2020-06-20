// Code 92 --> Video 106
/*
    * Conteúdo: *  Array
                * Array é um objeto
                *  E ao inves de organizar os seus dados por chave e valor ...
                * ... o array organiza por indice, ou seja, uma estrutura indexada
                * do 0 ... N
                * Array é uma estrutura heterogenia
                * MAS as boas praticas dizem que é melhor trabalhar com valores do mesmo tipo no array
*/


console.log(typeof Array, typeof new Array, typeof []) // new + funcao = orray, typeof []) // new + funcao = objetobjeto
let aprovados = new Array('Gabriel', 'Marcela', 'Eduardo', 'Zoe')
console.log(aprovados)

aprovados = ['Gabriel', 'Marcela', 'Eduardo', 'Zoe']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])
console.log(aprovados[4]) // não existe mas não tem problema

aprovados[4] = 'Chloe'
aprovados.push('Noan')
console.log(aprovados.length)

aprovados[9] = 'Benjamin'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o array original
console.log(aprovados)

delete aprovados[1] // deixa undefined a posicao .. só tirou o valor
console.log(aprovados)
aprovados.sort() // causa alterção no array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])


aprovados = ['Bia', 'Carlos', 'Ana']

aprovados.splice(1,1, 'Elemento1', 'Elemento2') // indice, quantidade de elementos que voce quer excluir...
// ... apartir do indice e os elementos que você quer adicionar
console.log(aprovados)