// Code 27 --> Video 39
/*
    * Conteúdo: * Notação Ponto
*/

const obj1 = {}
obj1.nome = "Gabriel"
// obj1['nome'] = "Gabriel Eduardo"
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log("Testanto")
    }
}

const obj2 = new Obj("Marcela")
const obj3 = new Obj("Mutante")
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()
