const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question(" Um número para A?", (na) => {
    rl.question("Um número para B?", (nb) => {

        let a = +na
        let b = +nb
        let soma = 0

        for (let i = a; i <= b; i++){
            soma = soma + i
        }
        console.log(soma)
        rl.close()
    })
})