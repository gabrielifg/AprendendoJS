// Code 118 --> Video 135
/*
    * Conteúdo: * Esvrendo no disco ...
*/


const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1234.89,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto), err =>{
    console.log(err || 'Arquivo salvo!')
})// __dirname representa o diretório atual