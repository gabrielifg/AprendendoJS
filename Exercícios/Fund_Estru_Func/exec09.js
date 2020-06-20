const verificandoStatusAluno = nota =>{

    if(nota < 38){
        return "Aluno reprovado"
    }else{
        if((nota % 5) > 2){
            while(nota % 5 != 0){
                nota += 1
            }
        }
        return nota
    }
}

console.log(verificandoStatusAluno(37))
console.log(verificandoStatusAluno(38))
console.log(verificandoStatusAluno(42))
console.log(verificandoStatusAluno(84))
console.log(verificandoStatusAluno(43))