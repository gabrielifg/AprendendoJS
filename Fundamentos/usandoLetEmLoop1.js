// Code 21 --> Video 33
/*
    * Conteúdo: * Exemplo do uso do LET em Loop 1       
*/

for(let i = 0; i < 10; i++){
    console.log(i)
}
// como let tem escopo de bloco, caso queira usar fora do bloco(nesse caso laço) não será possível com let. Pois por conta do escopo, a variavel "não existe fora do bloco"
//console.log("I fora = ", i)