// Code 51 --> Video 65
/*
    * Conteúdo: * Parâmetros e retornos CUIDADO
*/

function area(largura, altura){
    area = largura * altura
    if(area > 20 ){
        console.log(`Valor de area não permitido = ${area}`)
    }else{
        return area
    }
    
}

console.log(area(3, 3)) // "Normal"
console.log(area(3, 3, 3, 4, 5)) // Não usará os outros parametros ( Além dos específicados na função)
console.log(area()) // NaN (Falta os atributo)
console.log(area(2)) // NaN (Falta um atributo)
