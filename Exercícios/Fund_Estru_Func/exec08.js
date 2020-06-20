let jogos = [10, 8, 15, 20, 18, 16, 15, 28, 32, 6, 5, 50]
let melhorJogo = 0
let piorJogo = 0
let recordes = 0
let quandoPiorJogo

for (let i = 0;i < jogos.length; i++){
    if(i == 0){
        melhorJogo = jogos[i]
        piorJogo = jogos[i]
    }else{
        if(jogos[i] > melhorJogo){
            recordes += 1
            melhorJogo = jogos[i]
        }else if(jogos[i] < piorJogo){
            quandoPiorJogo = i + 1
            piorJogo = jogos[i]
        }
    }
}

console.log(recordes, quandoPiorJogo)