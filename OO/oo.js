// Code 73 --> Video 89
/*
    * Conteúdo: *  Código não executável
                * Trazer a realidade do mundo de maneira simplificada para o código/software
                * Quando você muda a implementação interna de um objeto não necessáriamente os usuários precisam saber
                * ... a não ser que mude a interface de comunicação
                * Priorize a composição ao inves de herança por ser mais flexivel
*/

// Procedural

processamento(valor1, valor2, valor3)

// OO

objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        // ...
    }
}

objeto.processamento() // foco passou a ser o objeto


// Principios importantes:
/*
 * 1 - Abstração // Somente aquilo que é necessário para cada objeto/classe
 * 2 - Encapsulamento // "Esconder os detalhes de implementação e mostrar somente aquilo que é necessário"
 * ... Quando menos depender de outros objetos melhor ... mais fácil para ser melhorarado
 * 3 - Herança (prototype) //  recebe atributos e métodos de outras estruturas (No caso do JS, só é permitido um único pai)
 * 4 - Polimorfismo // Varias formas ... que a partir de um nivel mais abstrado gera um nível concreto
*/