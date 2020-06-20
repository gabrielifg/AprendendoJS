// Code 113.1 --> Video 129
/*
    * Conteúdo: * Node faz cache
                * factory retorna uma nova instânica         
*/

module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}
