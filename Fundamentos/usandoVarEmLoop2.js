// Code 22 --> Video 34
/*
    * Conteúdo: * Exemplo do uso do VAR em Loop 2       
*/
var funcs = []
for(var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[3]() // Será o valor que fez o "funcs" sair do laço
funcs[8]() // Será o valor que fez o "funcs" sair do laço