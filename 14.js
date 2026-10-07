const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("numero para n1?", (num1) => {
    rl.question("numero para n2?", (num2) => {
        rl.question("numero para n3?", (num3) => {
            rl.question("numero para n4?", (num4) => {
                rl.question("numero para n5?", (num5) => {
                    rl.question("numero para n6?", (num6) => {

                        let n1 = +num1
                        let n2 = +num2
                        let n3 = +num3
                        let n4 = +num4
                        let n5 = +num5
                        let n6 = +num6
                        let n = [n1, n2, n3, n4, n5, n6]
                        let qntp = 0
                        let qntn = 0
                        let qnt0 = 0
                        for (let i = 0; i < n.length; i++) {
                            if (n[i] < 0) {
                                qntp++
                            } if (n[i] === 0) {
                                qntn++
                            } if (n[i] > 0)
                                qnt0++
                        }
                        console.log(qntp)
                        console.log(qntn)
                        console.log(qnt0)

                    })
                })
            })
        })
    })
})