// Code 40 --> Video 53
/*
    * Conteúdo: * Inicio do capitulo de estrutura de controle
                * Estrutura IF
*/
const soBoaNoticia = nota => {
    if(nota >= 7) console.log("Show de bola")
}

const seForVerdadeEuFalo = valor => {
    if(valor) {
        console.log("O valor convertido para boolean é verdade " + valor)
    }
}

{
    soBoaNoticia(8.8)
    seForVerdadeEuFalo()
    seForVerdadeEuFalo(null)
    seForVerdadeEuFalo(undefined)
    seForVerdadeEuFalo(NaN)
    seForVerdadeEuFalo("")
    seForVerdadeEuFalo(0)
    // Todos em diante são verdades
    seForVerdadeEuFalo(-1)
    seForVerdadeEuFalo(" ")
    seForVerdadeEuFalo("?")
    seForVerdadeEuFalo([])
    seForVerdadeEuFalo([1, 2])
    seForVerdadeEuFalo({})

}