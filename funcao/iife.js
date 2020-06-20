// Code 71 --> Video 86
/*
    * Conteúdo: * IIFE -> Immediately Invoked Function Expression
                * Bom para fugir e não tocar no escopo global
                * E tudo que for criado nesse4 escopo só estará disponivel nele
*/

(function(){
    console.log("Será executado na hora!")
    console.log("Foge do escopo mais abrangente")
})()