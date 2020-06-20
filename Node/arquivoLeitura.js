// Code 117 --> Video 134
/*
    * Conteúdo: * Lendo aruivo.json
*/
const fs = require('fs') //filesystem

const caminho = __dirname + '/arquivo.json' // __dirname representa o diretório atual

// sincrono // se o arquivo for grande não é aconselhado pelo tempo de osilação
// além disso, ele trava o eventloop e fica esperando a resposta... arquivos grandes gera um impacto maior

// unicod que foi usado no arquivo arquivo.json
const conteudo = fs.readFileSync(caminho, 'utf-8') // fica travado até ler todo o arquivo
console.log(conteudo)

//assincrono // mais interessante pois só vai ser chamado quando a callback ler todo o conteúdo

fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    const config = JSON.parse(conteudo) // precisa ser um objeto, antes do parse é uma string
    console.log(`${config.db.host}:${config.db.port}`)
})// chamada quando o arquivo tiver sido carregado


// forma mais simples

const config = require('./arquivo.json') // lê o arquivo e já converte para objeto
console.log(config.db) // é executado primeiro por estar utilizando a forma sincrona...
//... então o arquivo já está carregado e aparecerá antes da chamada assincrona
// que será chamada após o arquivo ser carregado

// ler diretórios

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // retorna um array
})