const lanchonete = (codigo,quantidade) =>{
    switch(codigo){
        case 100:
            console.log(`Cachorro Quente = ${3.00 * quantidade}`)
            break
        case 200:
            console.log(`Hambúrger Simples = ${"R$"}${4.00 * quantidade}`)
            break
        case 300:
            console.log(`Cheeseburguer = ${"R$"}${(5.50 * quantidade).toString().replace(".", ",")}`)
            break  
        case 400:
            console.log(`Bauru = ${"R$"}${7.50 * quantidade}`)
            break
        case 500:
            console.log(`Refrigerante = ${"R$"}${3.50 * quantidade}`)
            break
        case 600:
            console.log(`Suco = ${"R$"}${(2.80 * quantidade).toString().replace(".", ",")}`)
            break
        default:
            console.log("Codigo invalido")
    }
}


lanchonete(600, 2)

