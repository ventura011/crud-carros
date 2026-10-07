const readline = require("readline");
const { createBrotliCompress } = require("zlib");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let produtos = []
let proximoIdProduto = 1

let pedidos = []
let proximoIdPedido = 1

function mostrarMenu() {

    console.log("==================")
    console.log("   BYTEBURGER  ")
    console.log("==================")

    console.log("\nCARDÁPIO")

    console.log(" 1 - Cadastrar produto")
    console.log(" 2 - Listar produtos")
    console.log(" 3 - Buscar produto")
    console.log(" 4 - Atualizar produto")
    console.log(" 5 - Remover produto")
    console.log(" 6 - Alterar disponibilidade")

    console.log("\nPEDIDOS")

    console.log(" 7 - Criar pedido")
    console.log(" 8 - Adicionar produto ao pedido")
    console.log(" 9 - Visualizar pedido")
    console.log(" 10 - Remover item do pedido")
    console.log(" 11 - Alterar quantidade")

    console.log("\nFINALIZAÇÃO")

    console.log(" 12 - Finalizar pedido")
    console.log(" 13 - Cancelar pedido")
    console.log(" 14 - Listar pedido")
    console.log(" 15 - Listar pedidos abertos")

    console.log("\nRELATÓRIOS")

    console.log(" 16 - Mostrar faturamento")
    console.log(" 17 - Produto mais vendido")

    console.log(" 0 - Sair")

    rl.question("Digite uma opção: ", (opcao) => {

        if (opcao === "1") {
            cadastrarProduto()
        } else if (opcao === "2") {
            listarProdutos()
        } else if (opcao === "3") {
            buscarProdutoPorId()
        } else if (opcao === "4") {
            atualizarProduto()
        } else if (opcao === "5") {
            removerProduto()
        } else if (opcao === "6") {
            alterarDisponibilidade()
        } else if (opcao === "7") {
            criarPedido()
        } else if (opcao === "8") {
            adicionarProdutoPedido()
        } else if (opcao === "9") {
            visualizarPedido()
        } else if (opcao === "10") {
            removerItemPedido()
        } else if (opcao === "11") {
            alterarQuantidade()
        } else if (opcao === "12") {
            finalizarPedido()
        } else if (opcao === "13") {
            cancelarPedido()
        } else if (opcao === "14") {
            listarPedido()
        } else if (opcao === "15") {
            listarPedidosAbertos()
        } else if (opcao === "16") {
            mostrarFaturamento()
        } else if (opcao === "17") {
            produtoMaisVendido()
        } else if (opcao === "0") {
            console.log("Encerrando sistema...")

            rl.close()

        } else {
            console.log("Opção inválida.")

            mostrarMenu()
        }
    })
}

function cadastrarProduto() {

    rl.question("Qual o nome do produto?", (nome) => {
        rl.question("Categoria do produto?", (categoria) => {
            rl.question("Qual o preço do produto?", (preco) => {

                let produto = {

                    id: proximoIdProduto,
                    nome: nome,
                    categoria: categoria,
                    preco: preco,
                    disponivel: true,
                }

                produtos.push(produto)

                proximoIdProduto++

                console.log("Produto cadastrado!")

                mostrarMenu()
            })
        })
    })
}

function listarProdutos() {


    if (produtos.length === 0) {
        console.log("Nenhum produto encontrado.")
        mostrarMenu()
        return
    }

    for (let i = 0; i < produtos.length; i++) {
        console.log("-----------------------")

        console.log("ID: ", produtos[i].id)
        console.log("Nome: ", produtos[i].nome)
        console.log("Categoria: ", produtos[i].categoria)
        console.log("Preço: ", produtos[i].preco)
        console.log("Disponivel: ", produtos[i].disponivel)

    }
    mostrarMenu()
}

function buscarProdutoPorId() {

    rl.question("Qual o ID do produto que deseja procurar?", (id) => {
        id = +id
        let produtoEncontrado = null

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                produtoEncontrado = produtos[i]
            }
        }

        if (produtoEncontrado === null) {
            console.log("Produto não encontrado")
        } else {
            console.log("Produto encontrado!")

            console.log("ID:", produtoEncontrado.id)
            console.log("Nome:", produtoEncontrado.nome)
            console.log("Categoria:", produtoEncontrado.categoria)
            console.log("Preço:", produtoEncontrado.preco)
        }
        mostrarMenu()
    })
}

function atualizarProduto() {

    rl.question("Digite o ID do produto que deseja atualizar:", (id) => {

        id = +id

        let produtoEncontrado = null

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                produtoEncontrado = produtos[i]
            }
        }

        if (produtoEncontrado === null) {
            console.log("Produto não encontrado")
            mostrarMenu()
            return
        } else {

            console.log("\nProduto encontrado!")
            console.log("Deixe o espaço vazio para manter o valor atual")

            rl.question("Qual é o novo nome?", (nome) => {
                rl.question("Qual é a nova categoria?", (categoria) => {
                    rl.question("Qual é o novo preço?", (preco) => {

                        if (nome !== "") {
                            produtoEncontrado.nome = nome
                        }
                        if (categoria !== "") {
                            produtoEncontrado.categoria = categoria
                        }
                        if (preco !== "") {
                            produtoEncontrado.preco = preco
                        }

                        console.log("Produto atualizado!")

                        mostrarMenu()
                    })
                })
            })
        }
    })
}

function removerProduto() {

    rl.question("Qual é o ID do produto que deseja remover?", (id) => {
        id = +id

        let indice = -1

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                indice = i
            }
        }

        for (let i = 0; i < produtos.length; i++) {

            if (indice === -1) {
                console.log("Flashcard não encontrado")
            } else {

                produtos.splice(indice, 1)

                console.log("Produto removido com sucesso!")
            }
        }
        mostrarMenu()
    })
}

function alterarDisponibilidade() {

    rl.question("Qual o ID do produto que deseja mudar a disponibilidade?", (id) => {
        id = +id

        let produtoEncontrado = null

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                produtoEncontrado = produtos[i]
            }
        }

        if (produtoEncontrado === null) {
            console.log("Nenhum produto encontrado")
        } else {

            for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].disponivel === true) {
                    produtos[i].disponivel = false
                } else {
                    produtos[i].disponivel = true
                }

            }

            console.log("Disponibilidade alterada.")
        }
        mostrarMenu()
    })
}

function criarPedido() {

    rl.question("Qual o nome do cliente?", (nomeCliente) => {
        rl.question("Qual o total?", (total) => {

            let pedido = {
                id: proximoIdPedido,
                cliente: nomeCliente,
                itens: [],
                total: 0,
                status: "aberto"
            }

            pedidos.push(pedido)

            proximoIdPedido++

            console.log("Pedido criado!")

            mostrarMenu()
        })
    })
}

function adicionarProdutoPedido() {

    let pedidoEncontrado = null
    let produtoEncontrado = null

    rl.question("Qual o ID do pedido que deseja adicionar o produto?", (idPedido) => {
        rl.question("Qual o ID do produto?", (idProduto) => {
            rl.question("Qual a quantidade do produto?", (qtdProduto) => {
                idPedido = +idPedido
                idProduto = +idProduto

                for (let i = 0; i < pedidos.length; i++) {
                    if (idPedido === pedidos[i].id) {
                        pedidoEncontrado = pedidos[i]
                    }
                }

                if (pedidoEncontrado === null) {
                    console.log("Não existe nenhum pedido com esse ID, por favor, tente inserir outro ID.")

                    mostrarMenu()

                    return
                }

                for (let i = 0; i < produtos.length; i++) {
                    if (idProduto === produtos[i].id) {
                        produtoEncontrado = produtos[i]
                    }
                }


                if (produtoEncontrado === null) {
                    console.log("Não existe nenhum produto com esse ID, por favor, tente inserir outro ID")
                    mostrarMenu()
                    return
                }


                if (produtoEncontrado.disponivel === false) {
                    console.log("Este produto não está disponivel, por favor, insira o ID de um produto disponivel.")

                    mostrarMenu()

                    return
                }

                if (pedidoEncontrado.status !== "aberto") {
                    console.log("Este pedido não está mais em aberto.")
                    mostrarMenu()
                }

                let subTotal = qtdProduto * produtoEncontrado.preco

                let item = {
                    id: idProduto,
                    nome: produtoEncontrado.nome,
                    quantidade: qtdProduto,
                    precoUnitario: produtoEncontrado.preco,
                    subtotal: subTotal,
                }

                pedidoEncontrado.itens.push(item)

                console.log("Produto adicionado ao pedido!")

                mostrarMenu()
            })
        })
    })

}

function visualizarPedido() {

    let pedidoEncontrado = null

    rl.question("Qual o ID do pedido que deseja visualizar?", (id) => {
        id = +id

        for (let i = 0; i < pedidos.length; i++) {
            if (pedidos[i].id === id) {
                pedidoEncontrado = pedidos[i]
            }
        }

        if (pedidoEncontrado === null) {
            console.log("Pedido não encontrado.")
        }

        console.log("=================")
        console.log("PEDIDO: ", id)
        console.log("Cliente: ", pedidoEncontrado.cliente)
        console.log("Status: ", pedidoEncontrado.status)
        console.log("=================")

        for (let i = 0; pedidoEncontrado.itens.length; i++) {
            console.log(pedidoEncontrado.itens.nome)
            console.log("Quantidade: ", pedidoEncontrado.quantidade)
            console.log("Preço: ", pedidoEncontrado.preco)
            console.log("Subtotal: ", pedidoEncontrado.subTotal)
        }


    })
}
mostrarMenu()