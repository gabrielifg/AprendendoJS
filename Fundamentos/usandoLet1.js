// Code 19 --> Video 31
/*
    * Conteúdo: * Exemplo do uso do LET 1 
    * VAR = escopo global e função
    * LET = escopo global, função e bloco.
         
*/


/* As variaveis em javaScript trabalhao por escopos então não há problemas 
 * em ter variáveis com mesmo nome em escopos diferentes. 
 * O var trabalha de maneira global 
 *  já o let trabalha por bloco, se houver duas variáveis com o mesmo nome em blocos diferentes a variável trabalhará de separada. (Sem atrapalhar a outra)
 * Se não houver a variável que seja necessária no momento, o javaScript procurará em outro escopo.
 */
var numero = 1
{
    let numero = 2
    console.log("Dentro = ", numero)
}

console.log("Fora = ", numero)


// VAR = escopo global e função
// LET = escopo global, função e bloco.