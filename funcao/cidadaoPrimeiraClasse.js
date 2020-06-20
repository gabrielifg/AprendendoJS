// Code 50 --> Video 64
/*
    * Conteúdo: * Função
                * A função pode ser tratado como um dado (Pode ser um parâmetro, um valor e etc)
                * Função em  JS é First-Class Object (Citizens)
                * Higher-order function
*/

// criar de forma literal
function fun1() {return "proximo"} // Pode ou não retornar algo, se não retornar, a função vai retornar (undefined)

// armazenar em uma variável
const fun2 = function() { return "Olá mundo"} // Para invocar precisar chamar com o nome e parentese (fun2())

// Armazenar em um array

const array = [function(a, b) {return a + b}, fun1, fun2]

console.log(fun1(), fun2())

console.log(array[0](13, 2))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return "To falando"}

console.log(obj.falar())

// Passando uma função como parâmetro

function run (fun){
    fun()
}

run(function fun(){ console.log("To Passando uma função como parâmetro")})

// uma função pode retornar/conter uma função

function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma (2, 3)(8)

// OU

const armazenandoPrimeiraFuncao = soma(2, 3)
armazenandoPrimeiraFuncao(4)