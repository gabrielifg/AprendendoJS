// Code 52 --> Video 66
/*
    * Conteúdo: * Recuperando os parâmetros passados com o ARGUMENTS
*/
function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3).toFixed(2))
console.log(soma(1.1, 2.2, "Teste"))
console.log(soma("a", "b", "c"))