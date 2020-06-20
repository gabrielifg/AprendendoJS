// Code 61 --> Video 76
/*
    * Conteúdo: * Função CallBack Parte - II
                * Chamar de volta
                * É uma função que será chamada quando um evento acontecer
                * Evento nesse caso é um loop para o elemento
                * encontrou o elemento, passa o nome e o indice
                * Só toma uma ação quando o evento ocorrer
*/

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
let notasMqSete = []


function novasNotas(notas, indice){
    if(notas <= 7){
        console.log(`Nota: ${notas} / Indice: ${indice}`)
        notasMqSete.push(notas)
    }
    
}
notas.forEach(novasNotas)
console.log(notasMqSete)



// Exemplo sem callback curso

let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callbacks

let notasBaixas2 = notas.filter(function(notas){
    return notas < 7
}) // se for verdadeiro entrara no novo array criado apartir do "array principal"

console.log("Array com callback ", notasBaixas2)

// melhorando com arrow function

const notasBaixas3 = notas.filter(notas => notas < 7)

console.log("Callback com Arrow", notasBaixas3)

// melhorando ainda mais

const notasMenorQue7 = nota => nota < 7

let notasBaixas4 = notas.filter(notasMenorQue7)
console.log("Outro exemplo com const padrao com arrow para callback...",notasBaixas4)


