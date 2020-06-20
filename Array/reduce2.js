// Code 103 --> Video 117
/*
    * Conteúdo: * reduce - exercícios
*/

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?

const allBolsista = (resultado, bolsistaIndex) => resultado && bolsistaIndex
//console.log(typeof allBolsista)
console.log(alunos.map(a => a.bolsista).reduce(allBolsista))

// Desafio 2: algum aluno é bolsista?

const algumBolsista = (resultado, bolsistaIndex) => resultado || bolsistaIndex
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))