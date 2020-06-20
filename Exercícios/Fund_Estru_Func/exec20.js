// 100, 50, 10, 5, 1

const valorparaNotas = valor =>{
    let cedula100 = 0
    let cedula50 = 0
    let cedula10 = 0
    let cedula5 = 0
    let cedula1 = 0
    while(valor != 0){
        if(valor > 100){
            while(valor >= 100){
                cedula100 += 1
                valor -= 100
            }
            console.log(`${cedula100} nota(s) de R$ 100.`)
        }else if(valor >= 50){
            
                while(valor >= 50){
                    cedula50 += 1
                    valor -= 50
                }
                console.log(`${cedula50} nota(s) de R$ 50.`)
        }else if(valor >= 10){
            
            while(valor >= 10){
                cedula10 += 1
                valor -= 10
            }
            console.log(`${cedula10} nota(s) de R$ 10.`)
        }else if(valor >= 5){
            
            while(valor >= 5){
                cedula5 += 1
                valor -= 5
            }
            console.log(`${cedula5} nota(s) de R$ 5.`)
        }else if(valor >= 1){
            
            while(valor >= 1){
                cedula1 += 1
                valor -= 1
            }
            console.log(`${cedula1} nota(s) de R$ 1.`)
        }
    }
}

valorparaNotas(267)