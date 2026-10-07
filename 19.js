const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("valor de N?", (numStr) => {

    let N = +numStr

    for (let i = 1; i <= N; i++){
        console.log("*".repeat(i))
    }

    rl.close()
})