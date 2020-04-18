// Code 11 --> Video 23
/*
    Conteúdo: Arrays
*/

const valores = [7.7, 8.9, 9.3]
console.log(valores[1])
console.log(valores[4]) // o javascript é mais relevantes ao "erro", como não há essa
//posição ele dará a resposta "undefined"

// O array é dinamico, ou seja, poderemos acrescentar novas posições

valores[4] = 10
console.log(valores)

valores[10] = 7
console.log(valores)

console.log(valores.length) // função para saber a quantidades de elementos em um array

// Preze por arrays homogenios mesmo sendo possivel ter diversos elementos de diverentes tipos em um array

// retirando elementos do array
console.log(valores.pop()) // retira o ultimo elemento do array
delete valores[0] // retira o elemento que foi especificado
console.log(valores)

console.log(typeof valores) // é do tipo object