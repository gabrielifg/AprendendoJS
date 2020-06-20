// Code 57 --> Video 72
/*
    * Conteúdo: * Arrow function
                * Dois Objetivos: Ser mais curta (sintaxe menor)
                * E ter um THIS associado ao seu contexto
*/
function Pessoa(){
    this.idade = 0
    setInterval(() =>{
        this.idade++ // não varia de acordo com quem está chamando pois está em uma arrow function
        console.log(this.idade)
    }, 1000)
}


new Pessoa