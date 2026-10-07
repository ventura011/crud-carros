const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Qual é o limite total?", (limitetotal) => {
    let limite = +limitetotal
    let i = 0
    let soma = 0

    while (i >= limite){
        i++;
        soma = soma + i
    }
    console.log("Soma final: ", soma, "total:" , i)
    rl.close()

})