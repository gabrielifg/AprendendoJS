// Code 10 --> Video 22
/*
    Conteúdo: Tipo boolean
*/

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log("Os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // está pegando o valor que "substituirá" o true, ou seja, o que foi atribuido a variavel

console.log("Os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // está pegando o valor que "substituirá" o false, ou seja, o que foi atribuido a variavel

console.log('Para finalizar...')
console.log(!!('' || null || 0 || ' ')) // Na ocasião retorna o que for verdadeiro

// Exemplo:
let nome = ''

console.log(nome || 'Desconhecido') // Se o nome não for preenchido apresente a outra mensagem