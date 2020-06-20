let vetor = [10, 14, 29, 23, 50, 35, 20, 16, 18, 24, 23, 22, 21]
let vetor2 = [3, 4, 9, 33, 53, 73, 28, 26, 8, 14, 22, 12, 1]

for(let i = 0; i < vetor.length; i++){
    vetor[i] += vetor2[i]
    vetor2[i] = vetor[i] - vetor2[i]
    vetor[i] -= vetor2[i]
}

function mostrarTroca(vetor, vetor2){
    for(let i = 0; i < vetor.length; i++){
        console.log(`Vetor 1 = ${vetor[i]} // Vetor 2 = ${vetor2[i]}`)
    }
}

mostrarTroca(vetor, vetor2)

