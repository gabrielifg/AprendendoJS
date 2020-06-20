// Code 41 --> Video 54
/*
    * Conteúdo: * Inicio do capitulo de estrutura de controle
                * Estrutura IF, Exemplo: 2
*/
const teste1 = num => {
    if(num > 7) // Só irá executar a proxima linha
        console.log(num)
    console.log("Final")
}

teste1(6)
teste1(8)

const teste2 = num  => {
    if(num > 7); { // cuidado com o ";", não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)