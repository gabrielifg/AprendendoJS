function pagoAnuidade(anuidade, mes){
    if(mes == 1){
        return anuidade
    }else{
        return anuidade * Math.pow((1 + 0.05), mes)
    }
}


console.log("O valor da anuidade é:",pagoAnuidade(1000, 12).toFixed(2))