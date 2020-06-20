// Code 54 --> Video 69
/*
    * Conteúdo: * This ( e a suas doiduras) e a função bind
*/

const pessoa = {
    saudacao: "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar // mudando ocontexto lexico
falar() // como não está no contexto do obj pessoa, não dá certo ///////// Conflitos entre paradigmas: funcional e OO

// para resolver usa-se o BIND, pois ele serve para amarar um determinado objeto para ele ser o "dono da execução" e o this será referenciado sempre a esse objeto

const falarDePessoa = pessoa.falar.bind(pessoa) // o resultado está amarrado a função mas o valor do mesmo não é alterada
falarDePessoa()