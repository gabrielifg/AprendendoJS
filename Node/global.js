// Code 114 --> Video 130
/*
    * Conteúdo: * Global em node
                * Objeto (que possui atributos) está está aberto para mudanças
                * ... em todos os modulos do projeto
*/

globalThis.MinhaApp = Object.freeze({ // para congelar o objeto e não permitir que ele seja alterado em qualquer lugar
    saudacao(){
        return 'estou em todos os lugares'
    },
    nome: 'Sistema Legal'
})