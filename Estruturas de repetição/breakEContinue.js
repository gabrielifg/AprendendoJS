// Code 49 --> Video 63
/*
    * Conteúdo: * break e continue
                * break causa um desvio de fluxo, sai de um ponto e vai para depois do fim do bloco.
                * break influencia: switch, for e while.
                * Continue influencia: for e while
                * Continue: Vai interromper a sequencia do laço atual e vai para a proxima, faz sentido usar em estruturas de repetição
                
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numeros){ // "x" = indice do array
    if(x == 5){
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}


for(let y in numeros){
    if(y == 5){
        continue // interrompa a sequencia atual e vá para a proxima
    }

    console.log(`${y} = ${numeros[y]}`)
}

// rotulando um laço para usar o break
// não usar, há melhores formas para fazer isso

externo: for (let a in numeros){
    for(let b in numeros){
        if(a ==3 && b == 3) break externo
        console.log(`${a} = ${numeros[a]} | ${b} = ${numeros[b]}`)
    }
} // não use

console.log("\nFim!!!\n")