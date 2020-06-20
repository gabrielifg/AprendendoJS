function impares(inicio = 0, fim = 100){
    if(fim < inicio){
        fim = fim + inicio
        inicio = fim - inicio
        fim = fim - inicio
    }
    for(inicio; inicio <= fim; inicio++){
        if(inicio % 2 != 0){
            console.log(inicio)
        }
    }
}

impares(120, 100)
impares(60)