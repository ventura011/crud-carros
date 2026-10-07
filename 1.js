const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("Qual a sua nota?", (nr) => {
    let nota = nr
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5 && nota >= 6.9) {
        console.log("Recuperação")
        } else if (nota > 5) {
            console.log("Reprovado")
        }
    
    rl.close()
})