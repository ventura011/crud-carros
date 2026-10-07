const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("valor guardado por mês?", (valorStr) => {
    rl.question("quantidade de meses?", (mesStr) => {

        let valor = +valorStr
        let mes = +mesStr
        let soma = 0

        for (let i = 0; i < mes; i++){
            soma = soma + valor
        }
        console.log("Valor acumulado:", soma)

        rl.close()
    })
})