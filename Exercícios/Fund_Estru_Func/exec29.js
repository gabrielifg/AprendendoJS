let vetor = [10, 14, 29, 23, 50, 35, 20, 16, 18, 24, 23, 22, 21]
let dentro = 0
let fora = 0
for(let i = 0; i < vetor.length; i++){
    if(vetor[i] >= 10 && vetor[i] <= 20) dentro += 1
    else fora +=1
}

console.log(`Dentro = ${dentro} -- Fora = ${fora}`)