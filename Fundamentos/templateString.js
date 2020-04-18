// Code 9 --> Video 21
/*
    Conteúdo: Usando template string
*/

const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `Olá ${nome}!`
console.log(concatenacao,"\n",template)

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = primFunc => primFunc.toUpperCase()
console.log(`${up('hello world')}!`)