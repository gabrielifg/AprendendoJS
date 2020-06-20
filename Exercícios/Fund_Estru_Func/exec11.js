let ano = 2108

let anoBissexto = ano => {
    let anoBi = 0;
    if(ano%400 == 0){
        return true
    }else{
        let anoBissexto = ano/400
        anoBissexto = anoBissexto.toFixed(0)
        anoBissexto = ano - (anoBissexto * 400)
        if(anoBissexto >= 100){
            anoBissexto = ano/100
            anoBissexto = anoBissexto.toFixed(0)
            anoBissexto = ano - (anoBissexto * 100)
            
            if(anoBissexto == 0){
                return true
            }else{
                anoBissexto = ano/4
                anoBissexto = anoBissexto.toFixed(0)
                anoBissexto = ano - (anoBissexto * 4)
                if(anoBissexto == 0){
                    return true
                }else{
                    return false
                }
            }

            
            
        }
    }
}

console.log(anoBissexto(ano))