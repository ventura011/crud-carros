const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("um número para n?", (num) => {

    let n = +num
    let i = 0
    let quantidade = 0

    while (i <= n) {
        if (i % 4 === 2) {
            quantidade++
        }
        i++
    }

    console.log(quantidade)

    rl.close()
})