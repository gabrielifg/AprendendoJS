const novoSalario = (salario, planoDeTrabalho) =>{
    switch(planoDeTrabalho){
        case "A":
            salario += (salario * 0.10)
            console.log(salario)
            break
        case "B":
            salario += (salario * 0.15)
            console.log(salario)
            break
        case "C":
            salario += (salario * 0.20)
            console.log(salario)
            break
        default:
            console.log("Plano Inválido")

    }
}


novoSalario(1000, "C")