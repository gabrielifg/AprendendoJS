// Code 46 --> Video 60
/*
    * Conteúdo: * Inicio das estruturas de repetição
                * Do While
                * Executa sempre uma primeira vez independente da condição
*/

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { // Executará enquanto a condição for verdadeira
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while(opcao != -1)

console.log("Até a proxima!!!")