const operacao = (dividendo, divisor) =>{
    console.log(`O resultado da divisao entre ${dividendo} e ${divisor} é = ${(dividendo / divisor).toFixed(2)}`)
    console.log(`O resto da divisão foi de = ${dividendo % divisor}`)
}

operacao(35, 5)
operacao(32, 3)