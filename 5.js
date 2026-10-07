const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Um número para N?", (num) => {
    let n = +num
    let c1 = 0
    let c2 = 0

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            c1++
            console.log(i)
        }
        if (i % 3 === 0) {
            c2++
            console.log(i)
        }
    }
    console.log("Multiplos de 2: ", c1)
    console.log("Multiplos de 3: ", c2)

    rl.close()
})