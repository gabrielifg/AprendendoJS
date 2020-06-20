// Code 68 --> Video 83
/*
    * Conteúdo: * Função Factory: É uma função que retorna um novo  objeto
                * Objetivo FABRICAR um objeto
                * Com e sem parâmetro padrão
*/

function criarProduto(nomeProduto, precoDoroduto, desconto = 0.1){
    return {
        nomeProduto,
        precoDoroduto,
        desconto
    }
}

console.log(criarProduto("Celular", 1000))
console.log(criarProduto("Ipad", 6000, 0.15))