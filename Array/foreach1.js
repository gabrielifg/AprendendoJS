// Code 95 --> Video 109
/*
    * Conteúdo: * foreach
*/

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array){ // você pode suprir de acordo com os parâmetros que voce queira
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
}) //callback

aprovados.forEach(nome => console.log(nome))
// ou
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)