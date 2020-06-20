let valorPadrao = 100
function planoDeSaude(idade){
        if(idade < 10) console.log(`O valor do plano é ${valorPadrao + 80}`)
        else if(idade <= 30) console.log(`O valor do plano é ${valorPadrao + 50}`)
        else if(idade <= 60) console.log(`O valor do plano é ${valorPadrao + 95}`) 
        else if(idade > 60) console.log(`O valor do plano é ${valorPadrao + 130}`)
        else console.log("Idade inválida")
}

planoDeSaude(65)
planoDeSaude(10)
planoDeSaude(15)
planoDeSaude(25)
planoDeSaude(35)