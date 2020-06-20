let vetor = [10, -14, -29, 23, 50, 35, -20, 16, -18, 24, -23, 22, 21]
let total = 0
let aux = 0
for (let i in vetor){
    aux += 1
    total += vetor[i]
}

console.log(total)
console.log(aux)

const calcularMedia = (aux, total) => total/aux


console.log(`A media aritmetica é = ${calcularMedia(aux, total).toFixed(2)}`)