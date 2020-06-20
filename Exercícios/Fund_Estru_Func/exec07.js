let x = []
const bhaskara = (ax2, bx, c) => {
    let delta =Math.pow(bx, 2) - 4*ax2*c
    if(delta < 0){
        return "Delta é negativo"
    }else{
        x[0] = ((-bx + Math.sqrt(delta))/(2 * ax2)).toFixed(2)
        x[1] = ((-bx - Math.sqrt(delta))/(2 * ax2)).toFixed(2)
        return x
    }
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(-1, 7, 11))
console.log(bhaskara(4, 2, -6))