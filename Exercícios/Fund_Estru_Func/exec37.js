// progressão aritmética
let an
let sn
const progAritm = (n, a1, r) =>{

    an = a1 + (n-1)*r

    console.log("O N termo é ", an)

    // a soma

    sn = ((a1 + an)*n)/2

    console.log("A soma dos termos é", sn)
}

progAritm(3, 3, 4)

const progGeom = (n, a1, r) =>{

    an = a1*Math.pow(r, (n - 1))

    console.log("O N termo é ", an)

    // a soma

    sn = (a1*Math.pow(r, n)-1)/(r - 1)

    console.log("A soma dos termos é", sn.toFixed(2))
}

progGeom(7, 1, 3)