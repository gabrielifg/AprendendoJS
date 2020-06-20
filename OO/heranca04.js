// Code 83 --> Video 99
/*
    * Conteúdo: *  Herança 04
                * Quando você cria um objeto apartir de uma função construtora usando new
                * ...o prototipo desse objeto aponta automaticamente para a função que você 
                * ...criou.prototype
                * __proto__ é como o objeto referencia seu prototipo
*/

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// resumindo a loucura

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) // quando um objeto é iniciado a partir
// ... de uma função eles são iguais
console.log((MeuObjeto.__proto__) === Function.prototype) // meu objeto é uma função e ele tem o atributo
// ... (__proto__) e por padrão aponta para Function.prototype
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)