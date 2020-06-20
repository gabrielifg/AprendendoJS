// Code 96 --> Video 110
/*
    * Conteúdo: * foreach proprio
*/


Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice/*, array*/){ // você pode suprir de acordo com os parâmetros que voce queira
    console.log(`${indice + 1}) ${nome}`)
    //console.log(array)
}) //callback