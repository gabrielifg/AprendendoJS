// Code 82 --> Video 98
/*
    * Conteúdo: *  Herança 03
                * Relembre hasOwnProperty (Pertence ou não pertece ao objeto -> herança)
*/


const pai = { nome: 'Gabriel', corCabelo: 'Preto'}

const filha1 = Object.create(pai) // ao inves de apontar para Object.prototype, aponta para o especificado
// ... no create
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Marcela', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


for(let key in filha2){
    filha2.hasOwnProperty(key) ? // pertence somente a esse objeto?
    console.log(key) : console.log(`Por herança: ${key}`)
}
