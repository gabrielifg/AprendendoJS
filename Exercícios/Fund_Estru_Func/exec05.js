const alterandoFormatos = a =>{
    console.log(`${'R$'}${a.toFixed(2).toString().replace(".", ",")}`)
}

alterandoFormatos(0.1 + 0.2)