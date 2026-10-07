const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("numero para n1?", (num1) => {
    rl.question("numero para n2?", (num2) => {
        rl.question("numero para n3?", (num3) => {
            rl.question("numero para n4?", (num4) => {
                rl.question("numero para n5?", (num5) => {

                    let n1 = +num1
                    let n2 = +num2
                    let n3 = +num3
                    let n4 = +num4
                    let n5 = +num5
                    let acumulador = n1 + n2 + n3 + n4 + n5
                    let soma = 0
                    let media = acumulador / 5
                    soma = soma + acumulador
                    console.log(soma, media)

                    rl.close()
                })
            })
        })
    })
})