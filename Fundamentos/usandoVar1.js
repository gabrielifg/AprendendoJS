// Code 17 --> Video 29
/*
    Conteúdo: * Exemplo do uso do VAR 1       
*/
{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}
console.log(sera)

function varGlobal () {
    var teste = 123
    console.log(teste)
}

varGlobal()
console.log(teste) // NÃO É POSSIVEL ACESSAR VARIAVEIS DECLARADAS COMO VAR FORA DA FUNÇÃO


