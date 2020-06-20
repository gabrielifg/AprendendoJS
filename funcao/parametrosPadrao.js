// Code 53 --> Video 67
/*
    * Conteúdo: * Formas de obter parâmetros Padrões
*/

// estrategia 1 para gerar valor padrao // NAO FUNCIONA COM ZERO

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(2), soma1(3, 2), soma1(),soma1(4, 5, 7), soma1(0, 0, 0)/*Nesse ultimo caso da erro*/ )

// estrategia 2, 3, 4 para gerar valor padrao

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1/*pode alterar de acordo com a posicao do parametro*/ in arguments ? b : 1
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log(soma2(), soma2(2), soma2(2, 4), soma2(3, 4, 6), soma2(0, 0, 0) /*Dessa vez funciona*/)


// forma padrao para gerar numeros padros ES2015

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(0, 0, 0), soma3(2), soma3(3, 4), soma3(8, 7, 4), soma3())
