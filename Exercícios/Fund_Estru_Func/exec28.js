let vetor = [10, 14, 29, 23, 50, 35, 20, 16, 18, 24, 23, 22, 21]
let quantPar = 0
let quantImpar = 0

for(let i in vetor){
    if(vetor[i] % 2 == 0) quantPar += 1
    else quantImpar += 1
}

console.log(`Impar = ${quantImpar} -- Par = ${quantPar}`)