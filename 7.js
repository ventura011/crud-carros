const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question(" Um número para A?", (na) => {
    rl.question("Um número para B?", (nb) => {
        rl.question("operação: +, -, * ou / ", (operacao) => {

        let a = +na
        let b = +nb
        let soma = 0

        if (operacao === "+"){
            soma = a + b
        } else if (operacao === "-"){
            soma = a - b
        } else if (operacao === "*"){
            soma = a * b
        } else if (operacao === "*"){
            soma = a / b
        }
        
        console.log(soma)
        rl.close()
        })
    })
})