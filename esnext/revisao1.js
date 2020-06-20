// Code 123 --> Video 145
/*
    * Conteúdo: * Revisão 1
                * let e const
                * template string
                * destructuring
*/


// let e const
// let tem escopo de bloco

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) dá um erro por não está no bloco

// template String
const produto = 'iPad'
console.log(`${produto} é caro!`)  // tem vantagem pois a uma consideração de tags e quebras de linhas
//... além de, dentro do template ser possível colocar variáveis dentro do "${}" e isso será interpretado


//destructuring

const [l, e, ...tras] = 'Gabriel'
console.log(l, e, tras)

const [x, ,y] = [1,2,3]
console.log(x, y)

const {idade: i, nome} = {nome: "Marcela", idade: 15}
console.log(i, nome)