const vet = [10, 20, 2, 3, 4, 1, 13, 24, 5]
let vetResultante = []
const func1 = (vet, num) =>{
    for (let i in vet){
       vetResultante[i] =  vet[i] * num
    }
    return vetResultante
}

console.log(func1(vet, 2))

const func2 = (vet, num) =>{
    
        for (let i in vet){
            if(vet[i] > 5){
            vetResultante[i] =  vet[i] * num
            } 
        }
    return vetResultante
}

console.log(func2(vetResultante, 2))