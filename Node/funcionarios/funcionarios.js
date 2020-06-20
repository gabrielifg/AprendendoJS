// Code 112 --> Video 127
/*
    * Conteúdo: * Arquivo Json
                * Serve para você descrever como está sendo estruturado seu projeto
                * ... descrevendo tudo aquilo que é necessário... dependencias e etc
                * O packge-lock.json descreve de forma mais precisa aquilo que foi baixado...
                * ... se for feito alguma alteração de versão no package.json, mesmo assim ele...
                * ...pegará a versão que está nele por questão de segura e por ter a certeza que ...
                * ... aquela versão já foi testada na sua máquina
                * O packge-lock.json reforça a instalação correta dos pacotes
*/
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chinesa = f => f.pais === 'China'
const mulher = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

// Desafio -> // mulher chinesa com menor salário?
// Vídeo 128
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chinesa)
        .filter(mulher)
        .reduce(menorSalario)

        console.log(func)
})



