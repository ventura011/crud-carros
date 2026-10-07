const readline = require("readline");
const { createBrotliCompress } = require("zlib");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let carros = []

let proximoIdCarro = 1
let proximoIdCliente = 1
let proximoIdAluguel = 1

let clientes = []
let alugueis = []

function cadastrarCarro() {
    rl.question("Digite o modelo do carro:", (modelo) => {
        rl.question("Digite a placa do carro: ", (placa) => {

            let placaDuplicada = false

            for (let i = 0; i < carros.length; i++) {
                if (carros[i].placa === placa) {

                    placaDuplicada = true
                }
            }

            if (placaDuplicada === true) {
                console.log("Já existe um carro com está placa registrada. Por favor, tente inserir outra placa.")

                cadastrarCarro()

            } else {

                rl.question("Digite o ano: ", (ano) => {
                    rl.question("Digite o preço por dia: ", (precoPorDia) => {

                        let carro = {
                            id: proximoIdCarro,
                            modelo: modelo,
                            placa: placa,
                            ano: Number(ano),
                            precoPorDia: Number(precoPorDia),
                            disponivel: true
                        }

                        carros.push(carro)

                        proximoIdCarro++

                        console.log("\n Carro cadastrado com sucesso")

                        mostrarMenu()

                    })
                })
            }
        })
    })
}

function listarCarro() {
    console.log("\n Listar Carros")

    if (carros.length === 0) {
        console.log("Nenhum Carro cadastrado")

        mostrarMenu();

        return
    }

    for (let i = 0; i < carros.length; i++) {
        console.log("----------------")

        console.log("ID: ", carros[i].id);
        console.log("Modelo: ", carros[i].modelo);
        console.log("Placa: ", carros[i].placa);
        console.log("Ano: ", carros[i].ano);
        console.log("Preço por dia: ", carros[i].precoPorDia);
        console.log("Disponível: ", carros[i].disponivel);

    }

    mostrarMenu()
}

function buscarCarroPorId() {
    rl.question("Qual o ID do carro?", (id) => {
        id = +id

        let carroEncontrado = null

        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carroEncontrado = carros[i]
            }
        }

        if (carroEncontrado === null) {
            console.log("Carro não encontrado")
        } else {
            console.log("\nCarro encontrado:");

            console.log("ID:", carroEncontrado.id);
            console.log("Modelo:", carroEncontrado.modelo);
            console.log("Placa:", carroEncontrado.placa);
            console.log("Ano:", carroEncontrado.ano);
            console.log("Preço por dia:", carroEncontrado.precoPorDia);
            console.log("Disponível:", carroEncontrado.disponivel);
        }

        mostrarMenu()
    })
}

function removerCarro() {
    rl.question("Digite o ID que deseja remover:", (id) => {
        id = +id

        let indice = -1

        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                indice = i
            }
        }

        for (let i = 0; carros.length; i++) {

            if (indice === -1) {

                console.log("Carro não encontrado")
            } else if (carros[i].disponivel === false) {

                console.log("Este carro não pode ser removido pois atualmente está alugado.")

                removerCarro();

                return;

            } else {

                carros.splice(indice, 1)


                console.log("Carro removido com sucesso")

            }
        }

        mostrarMenu();

    })
}

function atualizarCarro() {
    rl.question("Digite o ID do carro que deseja atualizar:", (id) => {
        id = +id

        let carroEncontrado = null

        for (let i = 0; i < carros.length; i++) {
            if (carros[i].id === id) {
                carroEncontrado = carros[i]
            }
        }

        if (carroEncontrado === null) {
            console.log("Carro não encontrado")
            mostrarMenu()
            return
        }

        console.log("\nCarro encontrado: ", carroEncontrado)
        console.log("Deixe vazio para manter o valor atual")

        rl.question("Novo modelo (" + carroEncontrado.modelo + "): ", (modelo) => {
            rl.question("Nova placa (" + carroEncontrado.placa + "): ", (placa) => {
                rl.question("Novo ano (" + carroEncontrado.ano + ") ", (ano) => {
                    rl.question("Novo preço por dia (" + carroEncontrado.precoPorDia + "): ", (precoPorDia) => {
                        if (modelo !== "") {
                            carroEncontrado.modelo = modelo
                        }
                        if (placa !== "") {
                            carroEncontrado.placa = placa
                        }
                        if (ano !== "") {
                            carroEncontrado.ano = Number(ano)
                        }
                        if (precoPorDia !== "") {
                            carroEncontrado.precoPorDia = Number(precoPorDia)
                        }

                        console.log("\n Carro atualizado com sucesso")

                        mostrarMenu()
                    })
                })
            })
        })
    })
}

function cadastrarCliente() {
    rl.question("Nome do cliente? ", (nome) => {
        rl.question("CPF do cliente? ", (cpf) => {

            let cpfDuplicado = false

            for (let i = 0; i < clientes.length; i++) {
                if (cpf === clientes[i].cpf) {
                    cpfDuplicado = true
                }
            }

            if (cpfDuplicado === true) {
                console.log("Já existe um cliente com esse CPF cadastrado. Por favor, verifique se o CPF está correto e tente novamente.")
                cadastrarCliente()

            } else {

                rl.question("Número de telefone? ", (telefone) => {

                    let cliente = {
                        id: proximoIdCliente,
                        nome: nome,
                        cpf: cpf,
                        telefone: telefone
                    }

                    clientes.push(cliente)

                    proximoIdCliente++

                    console.log("\nCLiente cadastrado com sucesso!")

                    mostrarMenu()
                })
            }
        })
    })
}

function listarCliente() {
    console.log("\n Listar clientes")

    if (clientes.length === 0) {
        console.log("Nenhum cliente cadastrado")

        mostrarMenu();

        return
    }

    for (let i = 0; i < clientes.length; i++) {
        console.log(" --------------- ")

        console.log("ID: ", clientes[i].id);
        console.log("Nome: ", clientes[i].nome);
        console.log("CPF: ", clientes[i].cpf);
        console.log("Telefone: ", clientes[i].telefone);

    }

    mostrarMenu()
}

function buscarClientePorId() {
    rl.question("Qual o ID do cliente?", (id) => {
        id = +id

        let clienteEncontrado = null

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === id) {
                clienteEncontrado = clientes[i]
            }
        }

        if (clienteEncontrado === null) {
            console.log("Cliente não encontrado")
        } else {
            console.log("\nCliente encontrado:") /

                console.log("ID: ", clienteEncontrado.id);
            console.log("Nome: ", clienteEncontrado.nome);
            console.log("CPF: ", clienteEncontrado.cpf);
            console.log("Telefone: ", clienteEncontrado.telefone);
        }

        mostrarMenu()
    })
}

function removerCliente() {
    rl.question("Digite o ID que deseja remover: ", (id) => {
        id = +id

        let indice = -1

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === id) {
                indice = i
            }
        }

        if (indice === -1) {
            console.log("Cliente não encontrado")
        } else {
            clientes.splice(indice, 1)

            console.log("Cliente removido com sucesso")
        }

        mostrarMenu();
    })
}

function atualizarCliente() {
    rl.question("Digite o ID do cliente que deseja atualizar: ", (id) => {
        id = +id

        let clienteEncontrado = null

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].id === id) {
                clienteEncontrado = clientes[i]
            }
        }

        if (clienteEncontrado === null) {
            console.log("Cliente não encontrado")
            mostrarMenu()
            return
        }

        console.log("\nCliente encontrado: ", clienteEncontrado)
        console.log("Deixe vazio para manter o valor atual")

        rl.question("Novo nome (" + clienteEncontrado.nome + "): ", (nome) => {
            rl.question("Novo CPF (" + clienteEncontrado.cpf + "): ", (cpf) => {
                rl.question("Novo telefone (" + clienteEncontrado.telefone + "): ", (telefone) => {
                    if (nome !== "") {
                        clienteEncontrado.nome = nome
                    }
                    if (cpf !== "") {
                        clienteEncontrado.cpf = cpf
                    }
                    if (telefone !== "") {
                        clienteEncontrado.telefone = telefone
                    }

                    console.log("\n Cliente atualizado com sucesso")

                    mostrarMenu()
                })
            })
        })
    })
}

function realizarAluguel() {

    rl.question("Digite o ID do cliente:", (idCliente) => {

        idCliente = +idCliente

        let clienteEncontrado = null

        for (let i = 0; i < clientes.length; i++) {

            if (clientes[i].id === idCliente) {

                clienteEncontrado = clientes[i]
            }
        }

        if (clienteEncontrado === null) {
            console.log("Cliente não encontrado")

            mostrarMenu()

            return
        }

        rl.question("Digite o ID do carro: ", (idCarro) => {
            idCarro = +idCarro

            let carroEncontrado = null

            for (let i = 0; i < carros.length; i++) {

                if (carros[i].id === idCarro) {
                    carroEncontrado = carros[i]
                }
            }
            
                if (carroEncontrado.status === "Ativo") {
                    console.log("Este carro já está alugado.")

                    mostrarMenu()

                    return
                }

            if (carroEncontrado === null) {
                console.log("Carro não encontrado")

                mostrarMenu()

                return

            }


            if (carroEncontrado.disponivel === false) {
                console.log("Esse carro não está disponivel")

                mostrarMenu()

                return
            }

            rl.question("Quantos dias deseja alugar: ", (dias) => {
                dias = +dias

                let total = dias * carroEncontrado.precoPorDia

                let aluguel = {
                    id: proximoIdAluguel,
                    idCliente: idCliente,
                    idCarro: idCarro,
                    dias: dias,
                    total: total,
                    status: "Ativo"

                }

                alugueis.push(aluguel)

                proximoIdAluguel++

                carroEncontrado.disponivel = false

                console.log("\nAluguel realizado com sucesso!");
                console.log("Cliente: ", clienteEncontrado.nome);
                console.log("Carro: ", carroEncontrado.modelo);
                console.log("Dias: ", dias);
                console.log("Total: R$", + total);

                mostrarMenu()

            })
        })
    })
}

function devolverCarro() {

    rl.question("Digite o ID do aluguel: ", (idAluguel) => {
        id = +id

        let aluguelEncontrado = null

        for (let i = 0; i < alugueis.length; i++) {
            if (alugueis[i].id === idAluguel && alugueis[id].status === "ativo") {
                aluguelEncontrado = alugueis[i]
            }
        }

        if (aluguelEncontrado === null) {
            console.log("Aluguel ativo não encontrado")

            mostrarMenu()

            return
        }

        aluguelEncontrado.status = "finalizado";

        for (let i = 0; i < carros.length; i++) {

            if (carros[i].id === aluguelEncontrado.idCarro) {

                carros[i].disponivel = true
            }
        }

        console.log("Carro devolvido com sucesso")

        mostrarMenu()

    })
}

function listarAlugueisAtivos() {

    console.log("\n ALUGUEIS ATIVOS")

    let encontrou = false

    for (let i = 0; i < alugueis.length; i++) {

        if (alugueis[i].status === "ativo") {
            encontrou = true;

            console.log("--------------------");

            console.log("ID:", alugueis[i].id);
            console.log("ID Cliente:", alugueis[i].idCliente);
            console.log("ID Carro:", alugueis[i].idCarro);
            console.log("Dias:", alugueis[i].dias);
            console.log("Total:", alugueis[i].total);
        }
    }

    if (encontrou === false) {
        console.log("Nenhum aluguel ativo")
    }

    mostrarMenu();

}

function listarAlugueisFinalizados() {
    console.log("\n HISTÓRICO DE ALUGUEIS")

    let encontrou = false

    for (let i = 0; i < alugueis.length; i++) {

        if (alugueis[i].status === "finalizado") {
            encontrou = true;

            console.log("--------------------");

            console.log("ID:", alugueis[i].id);
            console.log("ID Cliente:", alugueis[i].idCliente);
            console.log("ID Carro:", alugueis[i].idCarro);
            console.log("Dias:", alugueis[i].dias);
            console.log("Total:", alugueis[i].total);
        }
    }

    if (encontrou === false) {
        console.log("Nenhum aluguel ativo")
    }

    mostrarMenu();
}

function carrosDisponiveis() {

    let cont = 0

    console.log("\nCARROS DISPONIVEIS")
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === true) {
            console.log("ID: ", carros[i].id);
            console.log("Modelo: ", carros[i].modelo);
            console.log("Placa: ", carros[i].placa);
            console.log("Ano: ", carros[i].ano);
            console.log("Preço por dia: ", carros[i].precoPorDia);
            console.log("Disponível: ", carros[i].disponivel);
            console.log("   =================   ");
            cont++
        }
    }

    if (cont === 0) {
        console.log("Sem carros disponiveis")
    }

    mostrarMenu()
}

function carrosIndisponiveis() {

    for (let i = 0; i < carros.length; i++) {
        if (carros[i].disponivel === false) {
            console.log("ID: ", carros[i].id);
            console.log("Modelo: ", carros[i].modelo);
            console.log("Placa: ", carros[i].placa);
            console.log("Ano: ", carros[i].ano);
            console.log("Preço por dia: ", carros[i].precoPorDia);
            console.log("Disponível: ", carros[i].disponivel);
            console.log("   =================   ");
        }
    }
    mostrarMenu()
}

function buscarCarroPorPlaca() {

    rl.question("Qual a placa do carro que deseja procurar?", (placaCarro) => {

        let achou = false

        for (let i = 0; i < carros.length; i++) {
            if (carros[i].placa === placaCarro) {

                achou = true

                console.log("ID: ", carros[i].id);
                console.log("Modelo: ", carros[i].modelo);
                console.log("Placa: ", carros[i].placa);
                console.log("Ano: ", carros[i].ano);
                console.log("Preço por dia: ", carros[i].precoPorDia);
                console.log("Disponível: ", carros[i].disponivel);

            }
        }
        if (achou === false) {
            console.log("Carro não encontrado. Por favor, verifique se a placa digitada está correta.")

        }
        mostrarMenu()
    })
}

function resumoDoEstoque() {
    let cont = 0
    let contDisponivel = 0
    let contAlugados = 0


    for (let i = 0; i < carros.length; i++) {
        cont++
        if (carros[i].disponivel === true) {
            contDisponivel++
        }
        if (carros[i].disponivel === false) {
            contAlugados++
        }
    }
    console.log("Total de carros:" + cont)
    console.log("Total de carros disponiveis:" + contDisponivel)
    console.log("Total de carros indisponiveis:" + contAlugados)

    mostrarMenu()
}

function listarClientesTotal() {

    let cont = 0

    for (let i = 0; i < clientes.length; i++) {
        cont++
    }
    console.log("Total de clientes: ", cont)

    mostrarMenu()
}

function listarAlugueisAtivosComTotalEmAberto() {

    let soma = 0
    let encontrou = false

    for (let i = 0; i < alugueis.length; i++) {

        if (alugueis[i].status === "Ativo") {

        soma = soma + Number(alugueis[i].total)
        encontrou = true

        console.log("----------------------")

        console.log("ID:", alugueis[i].id);
        console.log("ID Cliente:", alugueis[i].idCliente);
        console.log("ID Carro:", alugueis[i].idCarro);
        console.log("Dias:", alugueis[i].dias);
        console.log("Total:", alugueis[i].total);


        }
    }

    console.log("Total de todos somados: ", soma)

    if (encontrou === false) {

        console.log("Nenhum aluguel ativo.")
    }

    mostrarMenu()
}

function relatorioGeralDoSistema () {
    
    let cont1 = 0
    let cont2 = 0
    let cont3 = 0
    let contDoTotal = 0

    let somaDoTotal = 0

    for (let i = 0; i < carros.length; i++) {
        cont1++
    }
    for (let i = 0; i < clientes.length; i++) {
        cont2++
    }
    for (let i = 0; i < alugueis.length; i++) {
        cont3++
        contDoTotal++

        somaDoTotal = i + alugueis[i].total

    }

    console.log("Total de carros: ", cont1)
    console.log("Total de clientes: ", cont2)
    console.log("Total de alugueis: ", cont3)
    console.log("   -------------------------   ")
    console.log("Soma dos finalizados: ", somaDoTotal)

    mostrarMenu()
}

function buscarClientePorCPF() {

    rl.question("Qual o CPF do cliente que deseja buscar?", (cpfCliente) => {

        let clienteCpf = null

        for (let i = 0; i < clientes.length; i++) {
            if (clientes[i].cpf === cpfCliente) {
                clienteCpf = clientes[i]
                
                console.log("Cliente encontrado!")
                console.log(clienteCpf)
            }
        }
    })
    mostrarMenu()
}

    function mostrarMenu() {
        console.log("       LOCADORA DE CARRO       ")
        console.log(" 1 - Cadastrar Carro")
        console.log(" 2 - Listar Carro")
        console.log(" 3 - Buscar Carro por ID")
        console.log(" 4 - Atualizar Carro")
        console.log(" 5 - Remover Carro")

        console.log("\n CLIENTES")
        console.log(" 6 - Cadastrar cliente")
        console.log(" 7 - Listar cliente")
        console.log(" 8 - Buscar cliente por ID")
        console.log(" 9 - Atualizar cliente")
        console.log(" 10 - Remover cliente")

        console.log("\nALUGUEL");
        console.log(" 11 - Realizar aluguel")
        console.log(" 12 - Devolver carro")
        console.log(" 13 - Listar alugueis ativos")
        console.log(" 14 - Listar histórico (finalizados)")

        console.log("\nFUNÇÕES EXTRAS");
        console.log(" 15 - Listar carros disponiveis");
        console.log(" 16 - Listar carros indisponiveis");
        console.log(" 17 - Buscar carro por placa");
        console.log(" 18 - Resumo do estoque");
        console.log(" 19 - Listar clientes total");
        console.log(" 20 - Listar alugueis ativos com total em aberto")
        console.log(" 21 - Relatório geral do sistema")
        console.log(" 22 - Buscar cliente por CPF")

        console.log(" 0 - Sair")

        rl.question("\nEscolha uma opção: ", (opcao) => {
            if (opcao === "1") {
                cadastrarCarro()
            } else if (opcao === "2") {
                listarCarro()
            } else if (opcao === "3") {
                buscarCarroPorId()
            } else if (opcao === "4") {
                atualizarCarro()
            } else if (opcao === "5") {
                removerCarro()
            } else if (opcao === "6") {
                cadastrarCliente()
            } else if (opcao === "7") {
                listarCliente()
            } else if (opcao === "8") {
                buscarClientePorId()
            } else if (opcao === "9") {
                atualizarCliente()
            } else if (opcao === "10") {
                removerCliente()
            } else if (opcao === "11") {
                realizarAluguel()
            } else if (opcao === "12") {
                devolverCarro()
            } else if (opcao === "13") {
                listarAlugueisAtivos()
            } else if (opcao === "14") {
                listarAlugueisFinalizados()
            } else if (opcao === "15") {
                carrosDisponiveis()
            } else if (opcao === "16") {
                carrosIndisponiveis()
            } else if (opcao === "17") {
                buscarCarroPorPlaca()
            } else if (opcao === "18") {
                resumoDoEstoque()
            } else if (opcao === "19") {
                listarClientesTotal()
            } else if (opcao === "20") {
                listarAlugueisAtivosComTotalEmAberto()
            } else if (opcao === "21")  {
                relatorioGeralDoSistema()
            } else if (opcao === "22") {
                buscarClientePorCPF()
            } else if (opcao === "0") {
                console.log("Sistema encerrado")

                rl.close()
            } else {
                console.log("Opção inválida")

                mostrarMenu()
            }
        })
    }
    mostrarMenu()