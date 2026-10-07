const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("preço?", (precoStr) => {
    rl.question("Quantidade de pagamentos?", (pagamentosStr) => {
        rl.question("Valor da parcela?", (valorParcelaStr) => {

            let preco = +precoStr
            let pagamentos = +pagamentosStr
            let valorparcela = +valorParcelaStr
            let totalpago = 0
            
            for (let i = 1; i <= pagamentos; i++){
                totalpago += valorparcela
            }

            if (totalpago > preco){
                console.log("Faltou:", (preco - totalpago))
            } else if (totalpago === preco){
                console.log("Pago certinho")
            } else {
                console.log("Troco", (totalpago - preco))
            }

        })
    })
})