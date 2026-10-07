const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("qual o valor de x?", (valorStr) => {
    let x = +valorStr

    for (let i = 0; i <= 10; i++){
        if(i % 2 === 0){
            console.log(x + "X" + i + "=" + (x*i))
        }
    }
    rl.close()
})