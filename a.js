let num = [1, 2, 3, 4, 5, 6, 7, 8]

let par = []
let impar = []

for (let i = 0; i < num.length; i++){

    if (num[i] % 2 === 0){
        par.push(num[i])

    } else if (num[i] % 2 === 1){
        impar.push(num[i])
    }
}
console.log("Pares: ", par)
console.log("Impares: ", impar)