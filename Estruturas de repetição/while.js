// Code 45 --> Video 59
/*
    * Conteúdo: * Inicio das estruturas de repetição
                * While
                * Executará enquanto a condição for verdadeira
                * Melhor(não quer dizer que não possa sem usado de outras formas) para repetições sem quantidade especifica
*/

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){ // Executará enquanto a condição for verdadeira
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
}

console.log("Até a proxima!!!")