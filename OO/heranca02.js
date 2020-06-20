// Code 81 --> Video 97
/*
    * Conteúdo: *  Herança 02
                * Leia os comentarios para saber mais sobre herança e prototype
*/

// cadeia de protótipos (prototype chain)
Object.prototype.attr00 = '0' // cuidado, não faça isso sem cuidado
const avo = {attr1: "A"}
const pai = {__proto__: avo, attr2: "B", attr3: 3}
const filho = {__proto__: pai, attr3: "C"} // Os escopos acima são mais abrangente
console.log(filho.attr0) // não tem em nehum dos objetos
console.log(filho.attr00) // como não tem no filho, procura no pai e no avo, como não neles e o avo 
// ... aponta para Object.prototype, então encontrará o atributo

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) //  no ultimo caso, como ele já encontra
// o atributo no obj filho ele "sombrea" o attr3 do pai

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing (sombreamento)
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // super para usar o "status" do pai (referencia ao prototipo
    }
}

// pode ser feito com __proto__
Object.setPrototypeOf(ferrari, carro) // objeto e seu prototipo
Object.setPrototypeOf(volvo, carro)

// por padrão será chamado os atributos que são do objeto mas isso não impede que você chame os atributos
// .. do pai
console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())