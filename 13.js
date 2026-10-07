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
                    let numeros = []
                    let maior = 0

                    numeros.push(n1)
                    numeros.push(n2)
                    numeros.push(n3)
                    numeros.push(n4)
                    numeros.push(n5)

                    for (let i = 0; 1 < numeros.length; i++){
                        if (numeros[i] > maior){
                        }
                    }
                    console.log(maior)
                    rl.close()
                    
                })
            })
        })
    })
})