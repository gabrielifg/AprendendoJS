const divisivelPor3 = numero =>{
    if(numero % 3 == 0){
        return true
    }else{
        return false
    }
}

console.log(divisivelPor3(3))
console.log(divisivelPor3(12))
console.log(divisivelPor3(7))
console.log(divisivelPor3(15))
console.log(divisivelPor3(8))
console.log(divisivelPor3(10))