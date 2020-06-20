let vetor = [10, -14, -29, 23, -50, 35, -20, 16, -18, 24, -23, 22, 21]
let menorQ0 = 0
for(let i in vetor){
    if(vetor[i] < 0){
        menorQ0 += 1
    }
}

console.log(`Menores que zero = ${menorQ0}`)