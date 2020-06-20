// Code 84 --> Video 100
/*
    * Conteúdo: *  Herança 05
                *
*/

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())


// Não modife padrões que já são específicos na linguegem, pode gerar efeitos inimaginaveis

String.prototype.toString = function(){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())