let notas = [10, 8.5, 6.8, 5.4, 2.1, 1.4, 9.8, 3.2, 7.4, 8.2]
//let conceitos = []
function conceitoNotas(notas){
    for(let i in notas){
        if(notas[i] < 4.9){
            console.log(`Nota: ${notas[i]} / Conceito: ${"D"}`)
             //conceitos[i] = "D"
        }else if(notas[i] < 6.9){
            console.log(`Nota: ${notas[i]} / Conceito: ${"C"}`)
            //conceitos[i] = "C"
        }else if(notas[i] < 8.9){
            console.log(`Nota: ${notas[i]} / Conceito: ${"B"}`)
            //conceitos[i] = "B"
        }else{
            console.log(`Nota: ${notas[i]} / Conceito: ${"A"}`)
            //conceitos[i] = "A"
        }

        // Não funcionou

        // switch(notas[i]){
        //     case 10: case 9:
        //         console.log(`Nota: ${notas[i]} / Conceito: ${"A"}`)
        //         break
        //     case 8: case 7:
        //         console.log(`Nota: ${notas[i]} / Conceito: ${"B"}`)
        //         break
        //     case 6: case 5:
        //         console.log(`Nota: ${notas[i]} / Conceito: ${"C"}`)
        //         break
        //     case 4: case 3: case 2: case 1: case 0:
        //         console.log(`Nota: ${notas[i]} / Conceito: ${"D"}`)
        //         break
        // }
    }
}

//console.log(conceitoNotas(notas))
conceitoNotas(notas)