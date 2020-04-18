// Code 20 --> Video 32
/*
    * Conteúdo: * Exemplo do uso do VAR em Loop 1       
*/

for(var i = 0; i < 10; i++){ // como var não tem escopo de bloco ele está disponivel fora do bloco 
    console.log("I dentro do bloco ", i)
}

console.log("i fora = ", i) // o valor será o "ultimo" ou seja, aquele que fez o "var i" sair do laço