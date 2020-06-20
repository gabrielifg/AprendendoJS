// Code 56 --> Video 71
/*
    * Conteúdo: * Arrow function
                * Dois Objetivos: Ser mais curta (sintaxe menor)
                * E ter um THIS associado ao seu contexto
*/
let dobro = function(a){
    return 2 * a
}
dobro = (a) => { // com os blocos precisam de um retorne
    return 2* a
}


dobro = a => a * 2 // sem chave o retorno pode ser implicito
console.log(dobro(Math.PI))
let ola = function(){
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" // o "_" é um parâmetro mas você pode ignorar pois o javascript permite isso

console.log(ola())