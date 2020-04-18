// Code 13 --> Video 25
/*
    Conteúdo: Passagem de valor por referencia, valor, atributos undefined e null
*/

//Passagem de parametro para objetos

const a = { nome: "Gabriel"} 
/*
 * Nessa declaração a constante "a" não armazena o conteúdo do objeto,
 * Mas sim o endereço da memoria em que está o objeto
 * Então se eu criar uma nova constante e atribuir a ela a constante "a" a nova...
 * ... constante receberá o endereço de memoria que a constante "a".
 * Portante a constante "b" terá o mesmo conteúdo e quaisquer mudanças afetará as duas constantes
 */
console.log("Contante A = ", a)

const b = a

console.log("Constante B = ", b)

b.nome =  "Gabriel Eduardo"
console.log("Alterando o valor do atributo \"nome\" na constante B")
console.log("Constante A = ", a)





// OBSERVAÇÃO: A passagem de valor de tipos primitivos é por valor = copia do valor
// Trbalhando com Null e Undefined


let valor // não inicializada - Não é legal trabahar fazendo isso com a variável
console.log(valor) // valor não foi definido = undefined

valor = null // O null representa que a variavel está vazia/sem valor, não aponta para nenhum endereço de memoria
console.log(valor)
// NULL É BOM PRAR UMA VARIÁVEL QUE TEM UM DETERMINADO VALOR

/* Se você tentar acessar algo que esteja null dará um erro
 * Exemplo:
 * let valor = null
 * console.log(valor.toString()) // ERRO!!!!
 */

// Nesse caso não será erro pois p produto não é null
// o resultado dirá somente que o preco não está definido no produto = undefined

const produto = {}
console.log(produto.preco)

/* mas se você tentar "entrar" em um atributo de preço dará erro pois o preço não foi sequer declarado
 * ... então, não é possivel que ele tenha algum atributo
 * console.log(produto.preco.a) ERRO!!!!
 */

// continuando
console.log(produto) // O que há no produto {}
produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evitar atribuir undefined, deixar a linguagem fazer esse papel
console.log(!!produto.preco) // de maneira logica o atributo com undefined é falso
// delete produto.preco ... deleta o atributo do objeto 
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // também é falso
console.log(produto)
