// Code 16 --> Video 28
/*
    Conteúdo: * Exemplo de função 2
              * Armazenando uma função em uma variável        
*/




{ // declarando funções

    const imprimirSoma = function (a, b) { // função anonima = função sem nome
        console.log(a + b)
    }

    // Armazendo uma função arrow
    // (forma reduzida de se fazer uma funçao, obs: só um dos pontos)
    //.. em uma variavel
    const soma = (a, b) => {
        return a + b
    }
    
    

    /* 
     * Retorno implicito com a Arrow function
     * MUITO IMPORTANTE
     * USAR SEMPRE QUE POSSIVEL
     */
    const subtracao = (a, b) => a - b // abstraindo o return
    const imprimirArrow = a => console.log(a) // Mais uma
    const imprimirArrow2 = a => a * a
    { // chamando as funções
        imprimirSoma(2, 3)
        console.log(soma(3, 5))
        console.log(subtracao(3, 5))
        imprimirArrow("ESSA FUNCTION ARROW É TOP!!!!")
        console.log("Arrow com potenciação ^quadrada: " + imprimirArrow2(3))
    }
}



