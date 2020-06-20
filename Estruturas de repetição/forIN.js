// Code 48 --> Video 62
/*
    * Conteúdo: * Inicio das estruturas de repetição
                * For/in
                * Umas das soluções para percorrer um array (não é a melhor solução)
                * For/In percorre pelo indice
                * Recebe o indice
*/

const notas = [9.8, 9.5, 9.2, 8.8, 8.0, 10]

for(let i in notas){
    console.log(i, notas[i])
}


const pessoa = {
    nome: "Gabriel",
    sobrenome: "Eduardo",
    idade: 19,
    peso: 59,

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}