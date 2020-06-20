// Code 80 --> Video 96
/*
    * Conteúdo: *  Herança 01
                * Objetivo da Herança é herdar de seu "pai" suas caracteristicas...
                * ... e não precisar ficar copiando e colando codigo
                * Composição é mais flexivel, se puder a use
                * 
                * PROTOTYPE: só está disponivel em uma função
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}


console.log(ferrari.prototype) // undefined
console.log(ferrari.__proto__) // o prototipo do obj ferrari existe e está vazio
console.log(ferrari.__proto__ === Object.prototype) // true
console.log(volvo.__proto__ === Object.prototype) // true
console.log(Object.prototype.__proto__) // null
console.log(Object.prototype.__proto__ === null) // true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // function function
console.log(Object.prototype, MeuObjeto.prototype) // {} MeuObjeto {}