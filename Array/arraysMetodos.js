// Code 93 --> Video 107
/*
    * Conteúdo: * Array
                * Métodos para se usar em um array
                * Array é um objeto
                *  E ao inves de organizar os seus dados por chave e valor ...
                * ... o array organiza por indice, ou seja, uma estrutura indexada
                * do 0 ... N
                * Array é uma estrutura heterogenia
                * MAS as boas praticas dizem que é melhor trabalhar com valores do mesmo tipo no array
*/


const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // tira da última posição
console.log(pilotos)

pilotos.push('Verstapen') // coloca no fim
console.log(pilotos)

pilotos.shift() // tira da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca no início
console.log(pilotos) 

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // posição, "quantos saem" e os que serão adicionados
console.log(pilotos)

pilotos.splice(3,1) // Posição, quantidades de elementos removidos apartir da posição
console.log(pilotos) // massa quebrou haha
const algunsPilotos = pilotos.slice(2) // novo array, apartir da posição indicada
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4) // limitando ( da P1 até P4 sem incluir o P4)
console.log(algunsPilotos2)