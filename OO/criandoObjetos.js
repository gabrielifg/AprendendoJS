// Code 75 --> Video 91
/*
    * Conteúdo: *  Revisão Objeto e criando seus proprios objetos
*/

// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object) //pde ter ()
const obj2 = new Object // funcção construtora

// criando com as proprias funções contrutoras
function Produto(nome, preco, desc){
    this.nome = nome // visivel para fora da função, ou seja, publica... os utros serão privados
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2888.92, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// funnção Factory // padrão de projeto para CRIAR/FABRICAR algo

function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 7980, 4)
const f2 = criarFuncionario("Maria", 11400, 1)
console.log(f1.getSalario().toFixed(2), f2.getSalario().toFixed(2))


// Object.create

const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna Objeto ...

const fromJson = JSON.parse('{"info": "Sou um Json"}')
console.log(fromJson.info)