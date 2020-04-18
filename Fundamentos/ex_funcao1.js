// Code 15 --> Video 27
/*
    Conteúdo: Exemplo de função Sem Retorno e com retorno
*/

// Função é uma receita de bolo onde você recebe os materiais/parametros de entrada(ou não receber nenhum parametro)...
// e os executa dentro da função...
// e o objetivo é "fazer o bolo"



{ // definindo as funções


    // Função Sem retorno
    function imprimirSoma(a, b) {
        console.log(a + b)
    }

    //função com retorno
    function soma(a, b = 0) {
        return a + b
    }


}

imprimirSoma(2, 3)
imprimirSoma(2) // resultado = NaN (number + undefined)


console.log(soma(2, 3))
console.log(soma(2)) // o segundo parametro ele usará o padrão definido na função
console.log(soma()) // Resultado = NaN (undefined + number)


