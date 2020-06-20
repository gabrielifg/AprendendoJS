// Code 110 --> Video 125
/*
    * Conteúdo: * Acessando arquivos de outras pastas
                * Meneira de exportar para esse modulo ser usado em outro arquivo
                * ./pastaC/index.js (code 111.1)
*/
const moduleA = require('../../moduleA')
console.log(moduleA.ola)

const http = require('http')

//const c = require('./pastaC')
const  c = require('./pastaC') // por sempre procurar o index, não precisa referênciar ele

console.log(c.ola2)

http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)