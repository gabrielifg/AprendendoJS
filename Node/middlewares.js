// Code 119 --> Video 137 e 138
/*
    * Conteúdo: * Middleware (request, response e next) // nesse exemplo, adequamos o req e resp para cxt (contexto)
                * O princípio é o mesmo
                * Cadeia de responsabilidade
                * Para ter um reuso maior NÃO há uma dependencia de funções diretamento
                * assim... quando for necessário chamar um novo método isso é específicado
                * pelo "next()", ou seja nesse padrão posso ter N funções que podem trabalhar de X maneiras
                * ... diferentes de acordo com o contexto. Tendo um reuso maior e uma responsabilidade específica 
                * ...para cada função
*/

// middleware pattern (chain of responsability) -> cadeia de responsabilidade

const passo1 = (ctx, next) => { // ctx (contexto) é um objeto que é passado de um middleware para o outro (de um passo para o outro)
    ctx.valor1 = 'Mid1' // ctx carrega os dados de um passo para o outro
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor = 'Mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'Mid3' // como nesse caso eu quero invocar apartir do passo3
// não há a necessidade de colocar o parâmetro NEXT, pois não terá um proximo passo

const exec = (cxt, ...middlewares) => { // lista de middlewares (Junção de parâmetros passados)
    const execPasso = indice => {
        middlewares && indice < middlewares.length && // se o array(middlewares) existir && o indice for menor que o tamanho máximo
           middlewares[indice](ctx, () => execPasso(indice + 1)) // ... então será chamado o middleware na ordem e chamado a função passando o ctx
           // ... e uma função recursiva chamando com o indice + 1 até que o indice sera maior ou igual ao tamanho maximo
    }
    execPasso(0)
}


const ctx = {}
exec(ctx, passo1, passo2, passo3) // você pode suprimir um passo e trocar a ordem também
console.log(ctx)
// const ctx1 = {}
// exec(ctx1, passo2, passo1, passo3)
// console.log(ctx1)
// const ctx2 = {}
// exec(ctx2,passo1, passo3)
// console.log(ctx2)
// const ctx3 = {}
// exec(ctx3,passo3, passo1) // como nesse caso eu estou chamando o passo3 e ele não tem o next, o passo1 não será executado
// console.log(ctx3)