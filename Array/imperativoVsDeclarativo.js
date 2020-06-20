// Code 105 --> Video 119
/*
    * Conteúdo: * Modos de "codar"
                * Imperativo ou declarativo
*/

const alunos = [
    {nome: 'João', nota: 8.5},
    {nome: 'Maria', nota: 9.2}
]

// imperativo -> Passo a passo ... menos reuso
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// declarativo -> Mais formas de se reusar
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)