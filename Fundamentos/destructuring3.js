// Code 31 --> Video 43
/*
    * Conteúdo: * Destructuring 3
                * Novo Recurso do ES2015 
*/

function rand({ min = 0, max = 1000}){ // me beneficiando passando valores padrões
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} 

const obj = {max: 50, min: 40} // Se qualquer um dos valores não for declaro a função usará os valores definidos como padrão.
console.log(rand(obj))
console.log(rand({ min: 955 }))
console.log(rand({}))
