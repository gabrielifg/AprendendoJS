// Code 26--> Video 38
/*
    * Conteúdo: * par nome/valor
*/

const saudacao = "Opa" // contexto léxico 1

function exec(){
    const saudacao = "Fala" //contexto léxico 2
    return saudacao // por estar em contextos diferentes o nome não terá problema
}
console.log(exec()) // contexto 2
console.log(saudacao) // contexto 1


// objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Gabriel",
    idade: 19,
    anoNasc: 2001,
    endereco: {
        rua: "Rua Sv 16",
        complemento: "Quadra 21 Lote 01"
    }
}

console.log(cliente)