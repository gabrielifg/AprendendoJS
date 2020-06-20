// Code 113 --> Video 129
/*
    * Conteúdo: * Node faz cache
                * Então se uma variável requerir algum dado por uma instancia, uma outra instância
                * ... pode obter esses dados por conta da cache
                
*/

module.exports  = {
    valor: 1,
    inc(){
        this.valor++
    }
}