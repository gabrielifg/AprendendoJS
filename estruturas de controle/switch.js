// Code 44 --> Video 58
/*
    * Conteúdo: * Switch
                * Sem o break será executado todos os casos
                * Ou seja o break é bom para executar um dos casos e sair
                * O break só sai do bloco switch
*/

const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){ // aredendando para baixo
        case 10:
        case 9:
            console.log("Quadro de honra")
            break // serve para sair do switch após executar o caso, coisa que não acontece de maneira padrão no javascript
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nota inválida")
    }
    console.log("Fim!")
}

imprimirResultado(10)
imprimirResultado(8.9) // será arredondado para baixo
imprimirResultado(6.55)
imprimirResultado(3)
imprimirResultado(11)
imprimirResultado(-2)