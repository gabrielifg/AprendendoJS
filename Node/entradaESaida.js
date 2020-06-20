// Code 122 --> Video 144
/*
    * Conteúdo: * Entrada e saída de dados
*/

const anonimo = process.argv.indexOf('-a') !== -1
// console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe seu nome: ') // apresenta na tela --> "printf"
    // stdin.on é semelhante ao scanf... pega o que foi digitado
    process.stdin.on('data', data =>{ // acontece quando o usuário digita algo e aperta o enter
        // passa uma função com aquilo que foi digitado
        const nome = data.toString().replace('\n', '') // replace para remover o "\n" que também é enviado e trocando por um espaço vazio

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
