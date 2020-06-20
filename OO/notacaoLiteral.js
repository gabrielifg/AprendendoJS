// Code 77 --> Video 93
/*
    * Conteúdo: *  Melhorias para a notação literal dos objetos
*/

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // não é mais necessário quando você quiser os nomes iguais ao da constante
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = "nota"
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)


const obj5 = { // como definir função em um objeto literal
    funcao1: function(){
        // ...
    },
    funcao2() { // da maneira mais nova
        // ....
    }
}
console.log(obj5)