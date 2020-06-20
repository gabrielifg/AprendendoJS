var age = 16
let resultado, resultado2
let resultadoQueSeraRetornado
let teste = age > 18 ? (
    console.log("OK, você pode ir."), 
    // console.log retorna "undefined", mas será ignorado porque
    // não é o último valor separado entre vírgulas entre parênteses
    console.log("Aproveite") //  valor a ser atribuído se maiores de 18 anos
) : (
    resultado = "Você é muito jovem!",
    resultado2 = "Foi malll :-(",
    // etc. etc.
    resultadoQueSeraRetornado = "Vazaaaa" // the value to be assigned if !(age > 18)
);

console.log(teste); // Vazaaaa