// Code 43 --> Video 56
/*
    * Conteúdo: * Estrutura IF +  Else if + else
                
*/

//Number.prototype.entre = (inicio, fim) => this >= inicio && this <= fim
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = nota => {
    if(nota.entre(9, 10)){
        console.log("Quadro de honra")
    } else if(nota.entre(7, 8.99)){ 
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)){ 
        console.log("Recuperação")
    }else if(nota.entre(0, 3.99)){
        console.log("Reprovado!!!")
    }else{
        console.log("Nota invalida");
    } 
}

imprimirResultado(9)
imprimirResultado(7.55)
imprimirResultado(5.8)
imprimirResultado(2.74)
imprimirResultado(11)