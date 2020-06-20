// Code 76 --> Video 92
/*
    * Conteúdo: *  Por que posso modificar um objeto que foi criado a partir de uma constante?
                * Isso ocorre pois você não altera o endereço em que o objeto está mas sim o seu conteúdo
                * ... ou seja, os valores dos atributos
                * Então, você só pode atribuir para a constante uma unica vez...
                * obs: você pode atribir aos atributos do objeto mas não a constante
*/

// pessoa -> 123 -> {...}

const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: "Ana"}

Object.freeze(pessoa) // congela o objeto e não permite que nada seja alterado

pessoa.nome = "Maria"
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: "João"}) // já criou para ser constante
pessoaConstante.nome = "Maria"
console.log(pessoaConstante)

