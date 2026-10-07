const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("valor para N?", (numStr) => {

    let N = +numStr
    let soma = 0

    for (let i = 0; i < N; i++){
        if (i % 3 !== 0){
            soma = soma + i
            console.log(i)
        }
    }

    rl.close()
})
