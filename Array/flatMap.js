// Code 107 --> Video 121
/*
    * Conteúdo: * FlatMap
                * Serve para "reduzir" arrays para um único array, deixando mais "flat"
*/
const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Chloe',
        nota: 8.1
    },{
        nome: 'Zoe',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Eduardo',
        nota: 10
    },{
        nome: 'Noan',
        nota:8.8
    }]
}]

const getNotaAluno = aluno => aluno.nota
const getNotaTurmaAluno = turma => turma.alunos.map(getNotaAluno)
const nota1 = escola.map(getNotaTurmaAluno)
console.log(nota1)

console.log([].concat([ 8.1, 9.3 ], [ 10, 8.8 ]))

// Bom para programação funcional
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatMap(getNotaTurmaAluno)
console.log(nota2)