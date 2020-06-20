// Code 120 --> Video 140, 141 e 142
/*
    * Conteúdo: * Projeto de API com express, nodemon e postman
*/
const porta = 3002
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extend: true}))
//  app.get('/produtos', (req, res, next) =>{
//     console.log("Middleware 1") // função middleware
//     next() // sem o next o programa não iria para a função abaixo
// })


 app.get('/produtos', (req, res, next) =>{ // dessa forma é especificado a url, se tirar "get" e colocar "use" poderá usar qualquer caminho após ser colocado a porta
     //res.send({nome: 'Notebook', preco: 123.45}) // converter para json
     res.send(bancoDeDados.getProdutos())
 })

 app.get('/produtos/:id', (req, res, next) =>{
     res.send(bancoDeDados.getProduto(req.params.id))
 })

 app.post('/produtos', (req, res, next) => {
     const produto = bancoDeDados.salvarProduto({
         nome: req.body.nome,
         preco: req.body.preco
     })
     res.send(produto) // json
 })

 app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // json
})

app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

 app.listen(porta, () =>{
     console.log(`Servidor está executando na porta ${porta}.`)
 })

