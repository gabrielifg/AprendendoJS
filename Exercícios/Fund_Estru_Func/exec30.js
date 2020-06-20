let vetor = [10, 14, 29, 23, 50, 35, 20, 16, 18, 24, 23, 22, 21]
let maiorElemento = 0
let menorElemento = 0
for(let i = 0; i < vetor.length; i++){
    if(i == 0){
        maiorElemento = vetor[i]
        menorElemento = vetor[i]
    }else{
        if(maiorElemento < vetor[i]) maiorElemento = vetor[i]
        else if (menorElemento > vetor[i] ) menorElemento = vetor[i]
    }
}

console.log(`Maior ${maiorElemento} -- Menor ${menorElemento}`)