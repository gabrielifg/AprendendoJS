const operacoesMatematicas = (a, operacao, b) =>{

    switch(operacao){
        case "+":
            console.log("Soma = " + (a + b))
            break 
        case "-":
            console.log("Substração = " + (a - b))
            break 
        case "*":
            console.log("Multiplicação = " + (a * b))
            break
        case "/":
            console.log("Divisão = " + (a / b).toFixed(2))
            break
        default:
            console.log("Operação inválida")
    }
}

operacoesMatematicas(2, "/", 1)
operacoesMatematicas(4, "*", 2)
operacoesMatematicas(8, "+", 2)
operacoesMatematicas(14, "-", 6)