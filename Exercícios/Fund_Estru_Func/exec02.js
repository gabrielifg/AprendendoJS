function ladosDoTriangulo(a, b, c){
    if(a == b && b == c){
        return console.log("É um triangulo Equilátero")
    }else if(a == b || b == c || a == c){
        return console.log("É um triangulo Isósceles")
    }else{
        return console.log("É um triangulo Escaleno")
    }
}

ladosDoTriangulo(1, 3, 5)
ladosDoTriangulo(1,1,1)
ladosDoTriangulo(1, 2, 2)