const rl = require("readline").createInterface({
 input: process.stdin,
 output: process.stdout
});

let produtos = []
let itens = []
let pedidos = []

let proximoIdProdutos = 1

let proximoIdPedidos = 1



///////////////////////////////////////
/////////////CARDÁPIO//////////////////
///////////////////////////////////////



function cadastrarProduto() {
 rl.question("Digite um nome: ", (nome) => {

 rl.question("Digite a categoria: ", (categoria) => {

 rl.question("Digite o preço: ", (preco) => {


 let produto = {
 id: proximoIdProdutos,
 nome: nome,
 categoria: categoria,
 preco: preco,
 disponivel: true
 };

 console.log("Produto cadastrado!")

 proximoIdProdutos++
 produtos.push(produto)


 mostrarMenu();

 });
 });
 });
};

function listarPedidos() {
 console.log("\n--- Lista de Produtos ---");

 if (produtos.length === 0) {

 console.log("Nenhum produto cadastrado.");

 mostrarMenu();

 return;
 }

 for (let i = 0; i < produtos.length; i++) {

 console.log("-------------------------");

 console.log("ID:", produtos[i].id);
 console.log("Nome:", produtos[i].nome);
 console.log("Categoria:", produtos[i].categoria);
 console.log("Preço:", produtos[i].preco);
 console.log("Disponível:", produtos[i].disponivel);
 }

 mostrarMenu();
};

function buscarProdutoPorId() {
 rl.question("Digite o ID: ", (id) => {

 id = Number(id);

 let produtoEncontrado = null;

 for (let i = 0; i < produtos.length; i++) {

 if (produtos[i].id === id) {

 produtoEncontrado = produtos[i];

 }


 if (produtoEncontrado === null) {

 console.log("Produto não encontrado.");

 } else {

 console.log("\n Produto encontrado:");


 console.log("ID:", produtos[i].id);
 console.log("Nome:", produtos[i].nome);
 console.log("Categoria:", produtos[i].categoria);
 console.log("Preço:", produtos[i].preco);
 console.log("Disponível:", produtos[i].disponivel);

 }
 }
 mostrarMenu();

 });

};

function atualizarProduto() {

 rl.question("Digite o ID do produto que deseja atualizar: ", (id) => {

 Id = Number(id)

 let produtoEncontrado = null

 for (let i = 0; i < produtos.length; i++) {

 if (produtos[i].id === Id) {

 produtoEncontrado = produtos[i];

 }
 }

 if (produtoEncontrado === null) {

 console.log("Produto não encontrado.");

 mostrarMenu();

 return;

 } else {

 console.log("Produto encontrado:");


 rl.question("Digite a novo nome: ", (nome) => {

 rl.question("Digite a nova categoria: ", (categoria) => {

 rl.question("Digite a novo preço: ", (preco) => {

 produtoEncontrado.nome = nome;
 produtoEncontrado.categoria = categoria;
 produtoEncontrado.preco = preco;

 console.log("Produto atualizado com sucesso!");

 mostrarMenu();
 });

 });

 });
 }
 });

};

function removerProduto() {

 rl.question("Digite o ID do produto que deseja remover: ", (id) => {

 id = Number(id);

 id = Number(id);

 let indice = -1;
 let disponivel = false
 for (let i = 0; i < produtos.length; i++) {

 if (produtos[i].id === id) {

 indice = i;

 }

 }
 let produtoRemovido = 0
 if (indice === -1) {

 console.log("Produto não encontrado.");

 } else {

 produtos.splice(indice, 1);

 console.log("Produto removido com sucesso!");

 }

 mostrarMenu();

 });
};

function alterarDisponibilidade() {
 rl.question("Digite o ID: ", (id) => {

 let produtoEncontrado = null
 let Id = +id

 for (let i = 0; i < produtos.length; i++) {
 if (produtos[i].id === Id) {
 produtoEncontrado = produtos[i];
 };
 };

 if (produtoEncontrado === null) {
 console.log("Nenhum produto encontrado")

 mostrarMenu();

 return;
 } else {
 for (let i = 0; i < produtos.length; i++) {
 if (produtos[i].disponivel === true) {
 produtos[i].disponivel === false;
 console.log("Status anterior: Disponível", "\n Novo status: Indisponível")

 };

 if (produtos[i].disponivel === false) {
 produtos[i].disponivel === true;
 console.log("Status anterior: Indisponível", "\n Novo status: Disponível")

 };
 };
 };

 mostrarMenu()

 });
};

///////////////////////////////////////
/////////////PEDIDOS///////////////////
///////////////////////////////////////


function criarPedido() {
 rl.question("Digite o nome do cliente: ", (cliente) => {


 pedido = {
 id: proximoIdPedidos,
 cliente: cliente,
 itens: [],
 total: 0,
 status: "aberto"
 };

 pedidos.push(pedido)
 proximoIdPedidos++

 console.log("Pedido criado com êxito.")
 mostrarMenu()

 });
};


function adicionarProdutoAoPedido() {
 rl.question("Digite o id do pedido: ", (idPedido) => {
 rl.question("Digite o id do produto: ", (idProduto) => {
 rl.question("Digite a quantidade: ", (quantidade) => {

 quantidade = +quantidade;
 idPedido = +idPedido;
 idProduto = +idProduto;
 let produtoEncontrado = null;
 let pedidoEncontrado = null;

 for (let i = 0; i < produtos.length; i++) {
 if (produtos[i].id === idProduto) {
 produtoEncontrado = produtos[i]
 }
 }

 if (produtoEncontrado == null) {
 console.log("Nenhum produto encontrado")

 mostrarMenu();

 return;
 }


 for (let i = 0; i < pedidos.length; i++) {
 if (pedidos[i].id === idPedido) {
 pedidoEncontrado = pedidos[i]
 }
 }

 if (pedidoEncontrado == null) {
 console.log("Nenhum pedido encontrado")

 mostrarMenu();

 return;

 };

 let subtotal = quantidade * produtoEncontrado.preco;


 let item = {
 idProduto: idProduto,
 nome: produtoEncontrado.nome,
 quantidade: quantidade,
 precoUnitario: produtoEncontrado.preco,
 subtotal: subtotal
 }

 pedidoEncontrado.itens.push(item)

 console.log("Item adicionado com sucesso.")

 mostrarMenu();

 });
 });
 });
};

function visualizarPedido() {
 rl.question("Digite o id do pedido: ", (idPedido) => {

 let Id = +idPedido;
 let pedidoEncontrado = null;

 for (let i = 0; i < pedidos.length; i++) {
 if (pedidos[i].id === Id) {
 pedidoEncontrado = pedidos[i];
 }
 }

 if (pedidoEncontrado === null) {
 console.log("Nenhum Pedido encontrado");
 mostrarMenu();
 return;
 }


 console.log(
 "\n===============================",
 "\n PEDIDO: ", pedidoEncontrado.id, 
 "\n CLIENTE:", pedidoEncontrado.cliente,
 "\n STATUS:", pedidoEncontrado.status, 
 "\n==============================="
 );

 for (let i = 0; i < pedidoEncontrado.itens.length; i++) {
 let itemAtual = pedidoEncontrado.itens[i];

 console.log(
 "Produto:", itemAtual.nome, 
 "\n Quantidade:", itemAtual.quantidade, 
 "\n Preço: R$", itemAtual.precoUnitario, 
 "\n Subtotal: R$", itemAtual.subtotal
 );
 console.log("-------------------------------");
 }

 mostrarMenu();
 });
}

 

function removerItemPedido() {
 rl.question("Digite o ID do Pedido: ", (idPedido) => {
 rl.question("Digite o ID do Produto: ", (idProduto) => {

 idPedido = +idPedido
 idProduto = +idProduto

 let pedidoEncontrado = null
 let produtoEncontrado = null
 let indice = -1

 for (let i = 0; i < pedidos.length; i++) {

 if (pedidos[i].id === idPedido) {
 pedidoEncontrado = pedidos[i]
 indice = i;
 }

 }

 for (let i = 0; i < produtos.length; i++) {

 if (produtos[i].id === idPedido) {
 produtoEncontrado = produtos[i]

 }
 }

 for (let i = 0; i < pedidoEncontrado.itens.length; i++) {
 if (idProduto === produtoEncontrado.id) {
 indice = i
 }

 }

 if (pedidoEncontrado === null || produtoEncontrado === null) {
 console.log("Nenhum Pedido/Produto encontrado.")

 mostrarMenu();

 return;

 } else if (pedidoEncontrado.status === "aberto") {

 pedido.itens.splice(indice, 1);

 console.log("Item do pedido removido.")
 }


 mostrarMenu();


 });
 });
};

function alterarQuantidade() {
 rl.question("Digite o ID do Pedido: ", (idPedidoStr) => {
 rl.question("Digite o ID do Produto: ", (idProdutoStr) => {
 rl.question("Digite a nova quantidade: ", (quantidade) => {

 idPedido = +idPedidoStr
 idProduto = +idProdutoStr
 let pedidoEncontrado = null
 for (let i = 0; i < pedidos.length; i++) {
 if (pedidos[i].id === idPedidoStr)

 pedidoEncontrado = pedidos[i]
 }


 if (pedidoEncontrado === null) {
 console.log("Pedido não encontrado")

 mostrarMenu();

 return;
 }

 pedidoEncontrado.quantidade = quantidade

 console.log("Pedido alterado com sucesso")

 });
 });
 });
};


///////////////////////////////////////
/////////////FINALIZAÇÃO///////////////
///////////////////////////////////////

function finalizarPedido() {
 console.log("\n--- Finalizar Pedido ---");

 rl.question("Digite o ID do pedido que deseja finalizar: ", (idPedido) => {
 
 let Id = +idPedido;
 let pedidoEncontrado = null; 

 for (let i = 0; i < pedidos.length; i++) {
 if (pedidos[i].id === Id) {
 pedidoEncontrado = pedidos[i];
 }
 }

 if (pedidoEncontrado === null) {
 console.log("Erro: O pedido não existe!");
 mostrarMenu();
 return;
 }

 if (pedidoEncontrado.status !== "aberto") {
 console.log("Erro: Este pedido não está aberto.");
 mostrarMenu();
 return;
 }

 if (pedidoEncontrado.itens.length === 0) {
 console.log("Erro: O pedido não possui nenhum item para ser finalizado.");
 mostrarMenu();
 return;
 }

 pedidoEncontrado.status = "finalizado";

 let totalCalculado = 0;
 for (let i = 0; i < pedidoEncontrado.itens.length; i++) {
 let itemAtual = pedidoEncontrado.itens[i];
 totalCalculado = totalCalculado + itemAtual.subtotal;
 }

 pedidoEncontrado.total = totalCalculado;


 console.log("============================");
 console.log("PEDIDO FINALIZADO");
 console.log("============================");
 console.log("Cliente:", pedidoEncontrado.cliente);
 console.log("Total: R$", totalCalculado);
 console.log("Obrigado pela compra!");

 mostrarMenu();
 });
};


///////////////////////////////////////
/////////////RELATÓRIOS////////////////
///////////////////////////////////////



function produtoMaisVendido() {
 let idsProdutos = [];
 let quantidadesVendidas = [];

 for (let i = 0; i < pedidos.length; i++) {
 if (pedido[i].status === "finalizados") {

 for (let j = 0; j = pedido[i].itens.length; j++) {

 let idProduto = pedidos[i].itens[j].idProduto;
 let quantidade = pedidos[i].itens[j].quantidade;

 let encontrou = false;

 for (let k = 0; k < idsProdutos.length; k++) {

 if (idsProdutos[k] === idProduto) {

 quantidadesVendidas[k] = quantidadesVendidas[k] + quantidade;

 encontrou = true;

 }


 }


 if (encontrou === false) {

 idsProdutos.push(idProduto);
 quantidadesVendidas.push(quantidade)

 }

 }

 }

 }


 if (idsProdutos.length === 0) {
 console.log("Nenhum produto vendido ainda");

 mostrarMenu();

 return;
 }


 let maiorQuantidade = quantidadesVendidas[0];
 let idMaisVendido = idsProdutos[0]

 for (let i = 1; i < quantidadesVendidas.length; i++) {

 if (quantidadesVendidas[i] > maiorQuantidade) {

 maiorQuantidade = quantidadesVendidas[i];
 idMaisVendido = idsProdutos[i];

 }

 }

 let nomeProduto = "";

 for (let i = 0; i < produtos.length; i++) {

 if (produtos[i].id === idMaisVendido) {

 }
 }

 console.log("\n===== PRODUTO MAIS VENDIDO =====");

 console.log("Produto: ", nomeProduto);
 console.log("Quantidade vendida: ", maiorQuantidade);

 mostrarMenu()
}

function mostrarMenu() {

 console.log("\n===============================");
 console.log(" Projeto - ByteBurguer ");
 console.log("===============================");

 console.log("\n Cardápio");
 console.log("1 - Cadastrar produto");
 console.log("2 - Listar produtos");
 console.log("3 - Buscar produto");
 console.log("4 - Atualizar produto");
 console.log("5 - Remover produto");
 console.log("6 - Alterar disponibilidade");

 console.log("\n Produtos")
 console.log("7 - Criar pedido");
 console.log("8 - Adicionar produto ao pedido");
 console.log("9 - Visualizar pedido");
 console.log("10 - Remover item do pedido");
 console.log("11 - Alterar quantidade");

 console.log("\n Finalização")
 console.log("12 - Finalizar pedido")
 console.log("13 - Cancelar pedido")
 console.log("14 - Listar pedidos")
 console.log("15 - Listar pedido abertos")

 console.log("\n Relatórios")
 console.log("16 - Mostrar faturamento")
 console.log("17 - Produto mais vendido")
 console.log("\n 0 - Sair");


 rl.question("\n Escolha uma opção: ", (opcao) => {

 if (opcao === "1") {

 cadastrarProduto();

 } else if (opcao === "2") {

 listarPedidos();

 } else if (opcao === "3") {

 buscarProdutoPorId();

 } else if (opcao === "4") {

 atualizarProduto();

 } else if (opcao === "5") {

 removerProduto()

 } else if (opcao === "6") {

 alterarDisponibilidade();

 } else if (opcao === "7") {

 criarPedido()

 } else if (opcao === "8") {

 adicionarProdutoAoPedido()

 } else if (opcao === "9") {

 visualizarPedido()

 } else if (opcao === "10") {

 removerItemPedido()

 } else if (opcao === "11") {

 alterarQuantidades()

 } else if (opcao === "12") {
 finalizarPedido()

 } else if (opcao === "13") {



 } else if (opcao === "14") {



 } else if (opcao === "15") {

 produtoMaisVendido()

 } else if (opcao === "0") {

 console.log("Sistema encerrado.");

 rl.close();

 } else {

 console.log("Opção inválida.");

 mostrarMenu();

 }

 });

}


// =====================================
// INICIAR PROGRAMA
// =====================================

mostrarMenu();