// Code 125 --> Video 147
/*
    * Conteúdo: * ES8: Object.values/Object.entries
                * Melhorias na sintaxe
                * Class
*/


const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj)) // array de arrays

//Melhorias na Notação Literal

const nome = 'Carla'
const pessoa = {
    nome, // não precisa ser nome: nome
    ola(){ // não precisa ser mais ola: function (){}
        return 'Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
// obs: class é convertida para function
class Animal{}
class Cachorro extends Animal {
    falar(){
        return "Áuuuu"
    }
}

// 8180
// 8443
//3306

console.log(new Cachorro().falar())
