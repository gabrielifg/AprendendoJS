// Code 60 --> Video 75
/*
    * Conteúdo: * Função CallBack Parte - I
                * Chamar de volta
                * É uma função que será chamada quando um evento acontecer
                * Evento nesse caso é um loop para o elemento
                * encontrou o elemento, passa o nome e o indice
                * Só toma uma ação quando o evento ocorrer
*/

const fabricantes = ["Mercedes", "Audi", "BMW"]


function imprimir(nome, indice){
    console.log(`${indice}. ${nome}`)
}

//fabricantes.forEach(imprimir)
fabricantes.forEach( (fabricantes, indice) => console.log(`${indice}. ${fabricantes}`))