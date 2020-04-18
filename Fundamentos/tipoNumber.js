// Code 5 --> Video 17
/*
 * Conteúdo: Tipo Number
 */

const peso1 = 7.0
const peso2 = 3.0

console.log("Peso 1: " + peso1,
    "\nPeso 2: " + peso2)
// Descobrindo se é Inteiro

console.log(Number.isInteger(peso1))

// calculando a media

const avaliacao1 = 8.75
const avaliacao2 = 6.2

const total = ((avaliacao1 * peso1)+(avaliacao2*peso2))
const media = (total/(peso1 + peso2))
console.log(media)

console.log(media.toFixed(2)) // fixando as casas decimais
console.log(media.toString()) //convertento para string
console.log(media.toString(2))//convertendo para binário
console.log(typeof media)

/* OBS: Number --> function.
 * number --> tipo de dado
 */
