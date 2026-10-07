const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("um número para n?", (num) => {
    let n = +num
    let fatorial = 1
    
    if (n < 0){
        console.log("Não existe fatorial negativo")
    } else {
        for (let i = 1; i <= n; i++){
            fatorial = fatorial * i
            console.log(fatorial)
        }
    }

})