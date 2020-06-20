// Code 55 --> Video 70
/*
    * Conteúdo: * This pode variar de acordo que a gente chama a função ( QUEM ENVOCA A FUNÇÃO)
*/



// Erro com o this

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

// Nesse caso a cima quem dispara a função é o temporizador e não oobjeto pessoa

// Para resolver coloque o bind para amarar a função ao objeto pessoa

// ou crie uma constante self e substitua o this por ela para sempre acessar o objeto