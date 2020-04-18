// Code 8 --> Video 20
/*
    Conteúdo: Usando string
*/

const escola = "cod3r"

console.log(escola.charAt(4)) // caracter na posicao 4
console.log(escola.charAt(4))
console.log(escola.charCodeAt(3)) // tra o codigo do caracter relacionado a tabela unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // criando uma nova string (substring) a partir da posicao 1
// limitando a substring
console.log(escola.substring(0,4)) // não inclui a ultima posicao

console.log('Escola '.concat(escola).concat("!"))
//também pode ser feito dessa forma
console.log('Escola ' + escola + "!")
console.log(escola.replace(3,'e'))

// expressões regulares
console.log(escola.replace(/\d/,'e')) // substitui todas os digitos pela letra "e" nesse caso
console.log(escola.replace(/\w/g,'e')) // substitui tudo pela letra "e"

console.log('Gabriel, Mamãe e Marcela'.split(",")) // criando um array atraves do método split