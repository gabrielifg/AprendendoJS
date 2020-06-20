// Code 65 --> Video 80
/*
    * Conteúdo: * Contexto Lexico
                * A função carrega consigo o seu contexto na qual ela está inserida
*/

const valor = "Global"

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = "Local"
    minhaFuncao()
}

exec()