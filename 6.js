const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Valor da compra?", (valorStr) => {

    let valor = +valorStr
    let valor2 = +valorStr
    let desconto = 0

    if (valor <= 100){
        valor2 = valor2
        desconto = 0
    } else if (valor <= 300){
        valor = valor * 0.90
        desconto = 10
    } else if (valor > 300) {
        valor = valor * 0.85
        desconto = 15
    }
    console.log("total sem desconto?: ", valor2, "total com desconto: ", valor, "desconto total (%): ", desconto)
    rl.close()
})