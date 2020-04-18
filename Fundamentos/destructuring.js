// Code 29 --> Video 41
/*
    * Conteúdo: * Destructuring
                * Novo Recurso do ES2015 
*/

const pessoa = {
    nome: "Gabriel",
    idade: 19,
    endereco: {
        rua: "Rua Sv 16",
        numero: 0
    }
}

const {nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

// E se não estiver os atributos...
const {sobrenome, bemHumorado = true /* se você não tem o atributo, deixe null, ou atribua valores logicos */} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)

// é preciso que o caminho até o dado esteja "setado", se não estiver dará erro

// ex:

// const {conta: {num, agen}} = pessoa 
//num e agen não existem mas conta também não e isso trará um erro. Pois, os "pais" precisam estar setados