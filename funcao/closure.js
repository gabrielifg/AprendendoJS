// Code 66 --> Video 81
/*
    * Conteúdo: * Closure é o escopo criado quando uma função é declarada
                * Esse ewscopo permite a função acessar e manipular variáveis externas à função
                *  "Escopo que envolve algo"
                * Contexto lexico em ação
                * A função lembra da sua origem e tem ciência de onde foi declarada
*/

const x = "Global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao())
