// Code 47 --> Video 61
/*
    * Conteúdo: * Inicio das estruturas de repetição
                * For
                * Melhor para repetições em uma quantidade específica, mas pode ser usado de outras formas
                * Recomendado usar LET no contador para que ele não fique disponivel fora do boco sem necessidade
*/

let contador = 1

while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}


console.log("\nCom for agora:\n")

for (let contador = 1; contador <= 10; contador++){
    console.log(`contador = ${contador}`)
}


console.log("\nPercorrendo um array com for:\n")

let notas = [9.5, 8.8, 8.0, 9.2, 10]

for(let i = 0; i < notas.length; i++){ 
    console.log(`O valor da posição ${i} é: ${notas[i]}`)
}