// Code 12 --> Video 24
/*
    Conteúdo: Object
*/


const testObject = {} // criando objeto de teste tendo essa estrutura
/* O objeto é uma coleção de chaves/identificadores unicos e valores
 * Objetos podem ter outros objetos dentro de si
 * As chaves podem ser construidas/instanciadas dinamicamente
 */
testObject.nome = "Gabriel Eduardo"
testObject.idade = 19
testObject['Faculdade - Especialização: '] = "Sistemas de Informação" // Evitar atributos com espaços
console.log(testObject)


const testObject2 = {
    nome: 'Camisa',
    Descrição: 'Polo Preta',
    preco: 79.99,
    obj: { // objeto dentro de outro objeto
        blabla: 1,
        obj: { // pode ser usado o mesmo identificador pois ele é unico para cada objeto
            // e não precisa ser unico em um contexto "global"
            blabla: 2
        }
    } // faça obj dentro de obj se for realmente necessário
}

console.log(testObject2)