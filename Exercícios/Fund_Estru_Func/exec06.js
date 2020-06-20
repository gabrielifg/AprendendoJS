let juros
let montante

const montJurosSimples = (c, i, t) =>{
    juros = c * (i/100) * t
    montante = c + juros
    return montante
}
const montJurosComposto = (c, i, t) =>{
    i /= 100
    montante = c * Math.pow((1 + i), t)
    //montante = c * (1 + i) ** t
    return montante

}

console.log(montJurosSimples(3000, 3, 5))
console.log(montJurosComposto(8000, 1.2, 6).toFixed(2))