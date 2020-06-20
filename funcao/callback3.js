// Code 62 --> Video 77
/*
    * Conteúdo: * Função CallBack Parte - III Execução no browser
                * Chamar de volta
                * É uma função que será chamada quando um evento acontecer
                * Evento nesse caso é um loop para o elemento
                * encontrou o elemento, passa o nome e o indice
                * Só toma uma ação quando o evento ocorrer
*/

document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('Evento ocorreu...')
}