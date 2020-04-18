// Code 23 --> Video 35
/*
    * Conteúdo: * Exemplo do uso do LET em Loop 2       
*/
var funcs = []
for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}
// A função tem consciência do local em que ela foi definida
funcs[1]()
funcs[8]() // o let por ter escopo de bloco o valor será lembrado e a função que está sendo chamada terá o seu valor correspondente nesse caso 1 e 8