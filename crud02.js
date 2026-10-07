const readline = require("readline");
const { createBrotliCompress } = require("zlib");




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




let flashcards = []
let proximoFlashcard = 1




function mostrarMenu() {




  console.log("====================")
  console.log("   STUDYCARDS  ")
  console.log("====================")




  console.log("\nFLASHCARDS")




  console.log(" 1 - Cadastrar flashcard")
  console.log(" 2 - Listar flashcards")
  console.log(" 3 - Buscar flashcard por ID")
  console.log(" 4 - Atualizar flashcard")
  console.log(" 5 - Remover flashcard")




  console.log("\nESTUDO")




  console.log(" 6 - Listar por matéria")
  console.log(" 7 - Listar por dificuldade")
  console.log(" 8 - Estudar flashcard")
  console.log(" 9 - Ver desempenho")




  console.log("\nRELATÓRIOS")




  console.log(" 10 - Flashcard com mais erros")
  console.log(" 11 - Estatísticas gerais")
  console.log(" 12 - Listar matérias")




  console.log(" 0 - Sair")




  rl.question("\nEscolha uma opção:", (opcao) => {




      if (opcao === "1") {
          cadastroDeFlashcards()
      } else if (opcao === "2") {
          listarFlashcards()
      } else if (opcao === "3") {
          buscarFlashcardPorID()
      } else if (opcao === "4") {
          atualizarFlashcard()
      } else if (opcao === "5") {
          removerFlashcard()
      } else if (opcao === "6") {
          listarPorMateria()
      } else if (opcao === "7") {
          listarPorDificuldade()
      } else if (opcao === "8") {
          estudarFlashcard()
      } else if (opcao === "9") {
          verDesempenho()
      } else if (opcao === "10") {
          flashcardComMaisErrados()
      } else if (opcao === "11") {
          estatisticasGerais()
      } else if (opcao === "12") {
          listarMaterias()
      } else if (opcao === "0") {
          console.log("Sistema encerrado.")




          rl.close()
      } else {




          console.log("Opção inválida.")




          mostrarMenu()
      }
  })
}




function cadastroDeFlashcards() {




  rl.question("Pergunta: ", (pergunta) => {
      rl.question("Resposta: ", (resposta) => {
          rl.question("Matéria: ", (materia) => {
              rl.question("Dificuldade: ", (dificuldade) => {




                  let flashcard = {
                      id: proximoFlashcard,
                      pergunta: pergunta,
                      resposta: resposta,
                      materia: materia,
                      dificuldade: dificuldade,
                      acertos: 0,
                      erros: 0
                  }




                  flashcards.push(flashcard)




                  proximoFlashcard++




                  console.log("Flashcard registrado!")




                  mostrarMenu()




              })
          })
      })
  })
}




function listarFlashcards() {




  for (let i = 0; i < flashcards.length; i++) {
      console.log(" ----------------------- ")




      console.log("ID:", flashcards[i].id)
      console.log("Matéria: ", flashcards[i].materia)
      console.log("Pergunta:", flashcards[i].pergunta)
      console.log("Resposta: ", flashcards[i].resposta)
      console.log("Dificuldade: ", flashcards[i].dificuldade)
      console.log("Acertos: ", flashcards[i].acertos)
      console.log("Erros: ", flashcards[i].erros)




      if (flashcards.length === 0) {
          console.log("Nenhum flashcard cadastrado.")
      }
  }
  mostrarMenu()
}




function buscarFlashcardPorID() {




  rl.question("Qual o ID do flashcard?", (idFlashCard) => {




      idFlashCard = +idFlashCard




      let flashcardEncontrado = null
      for (let i = 0; i < flashcards.length; i++) {
          if (flashcards[i].id === idFlashCard) {




              flashcardEncontrado = flashcards[i]
          }
      }




      if (flashcardEncontrado === null) {
          console.log("Nenhum flashcard encontrado.")
      } else {




          console.log("Flashcard encontrado:")




          console.log("ID:", flashcardEncontrado.id)
          console.log("Matéria: ", flashcardEncontrado.materia)
          console.log("Pergunta:", flashcardEncontrado.pergunta)
          console.log("Resposta: ", flashcardEncontrado.resposta)
          console.log("Dificuldade: ", flashcardEncontrado.dificuldade)
          console.log("Acertos: ", flashcardEncontrado.acertos)
          console.log("Erros: ", flashcardEncontrado.erros)
      }
      mostrarMenu()
  })
}




function atualizarFlashcard() {




  rl.question("Digite o ID do flashcard que deseja atualizar: ", (id) => {




      id = +id




      let flashcardEncontrado = null




      for (let i = 0; i < flashcards.length; i++) {
          if (flashcards[i].id === id) {
              flashcardEncontrado = flashcards[i]
          }
      }




      if (flashcardEncontrado === null) {
          console.log("Flashcard não encontrado")
          mostrarMenu()
          return
      } else {




          console.log("\nFlashcard encontrado!")
          console.log("Deixe o espaço vazio para manter o valor atual")




          rl.question("Qual é a nova pergunta?", (pergunta) => {
              rl.question("Qual é a nova resposta? ", (resposta) => {
                  rl.question("Qual é a nova matéria? ", (materia) => {
                      rl.question("Nova dificuldade?", (dificuldade) => {
                          if (resposta !== "") {
                              flashcardEncontrado.materia = materia
                          }
                          if (resposta !== "") {
                              flashcardEncontrado.resposta = resposta
                          }
                          if (materia !== "") {
                              flashcardEncontrado.materia = materia
                          }
                          if (dificuldade !== "") {
                              flashcardEncontrado.dificuldade = dificuldade
                          }




                          console.log("Flashcard atualizado!")




                          mostrarMenu()




                      })
                  })
              })
          })
      }
  })
}




function removerFlashcard() {




  rl.question("Qual é o ID do flashcard que deseja remover?", (id) => {
      id = +id




      let indice = -1




      for (let i = 0; i < flashcards.length; i++) {
          if (flashcards[i].id === id) {
              indice = i
          }
      }




      for (let i = 0; i < flashcards.length; i++) {




          if (indice === -1) {
              console.log("Flashcard não encontrado.")
          } else {




              flashcards.splice(indice, 1)




              console.log("Flashcard removido com sucesso!")
          }
      }




      mostrarMenu()
  })
}




function listarPorMateria() {




  let cont = 0
  let flashcardEncontrado = null




  rl.question("Qual a matéria que deseja procurar?", (materia) => {




      for (let i = 0; i < flashcards.length; i++) {
          if (flashcards[i].materia === materia) {
              cont++
              flashcardEncontrado = flashcards[i]




              console.log("Flashcard encontrado!")
              console.log("----------------------")




              console.log("Pergunta: ", flashcardEncontrado.pergunta)
              console.log("Resposta: ", flashcardEncontrado.resposta)
              console.log("Matéria: ", flashcardEncontrado.materia)
              console.log("Dificuldade: ", flashcardEncontrado.dificuldade)
          }
      }




      if (flashcardEncontrado === null) {
          console.log("Flashcard não encontrado, por favor, tente novamente.")
      }




      console.log("Flashcards encontrados: ", cont)
      mostrarMenu()
  })
}




function listarPorDificuldade() {




  let flashcardEncontrado = null




  rl.question("Qual a dificuldade do flashcard que deseja listar?", (dificuldade) => {




      for (let i = 0; i < flashcards.length; i++) {




          if (flashcards[i].dificuldade === dificuldade) {
              flashcardEncontrado = flashcards[i]




              console.log("Flashcard encontrado:")
              console.log("----------------------")




              console.log("Pergunta: ", flashcardEncontrado.pergunta)
              console.log("Resposta: ", flashcardEncontrado.resposta)
              console.log("Matéria: ", flashcardEncontrado.materia)
              console.log("Dificuldade: ", flashcardEncontrado.dificuldade)




          }
      }




      if (flashcardEncontrado === null) {
          console.log("Nenhum flashcard com essa dificuldade encontrado.")
      }
      mostrarMenu()
  })
}




function estudarFlashcard() {




  let indiceAleatorio = Math.floor(Math.random() * flashcards.length);
  let flashcard = flashcards[indiceAleatorio]




  console.log("Iniciando modo de estudo")
  console.log("==========================")




  console.log("ID do flashcard escolhido: ", flashcard.id)




  rl.question(flashcard.pergunta + "\nPressione ENTER para ver a resposta.", (pergunta) => {




      if (pergunta === "" || pergunta !== "") {




          console.log(flashcard.resposta)




          rl.question("Você acertou a pergunta?" + "\n 1 - Sim" + "\n 2 - Não", (acertou) => {




              acertou = +acertou




              if (acertou === 1) {
                  flashcard.acertos++
              }




              if (acertou === 2) {
                  flashcard.erros++
              }




              console.log("Total de acertos: ", flashcard.acertos)
              console.log("Total de erros: ", flashcard.erros)








              mostrarMenu()
          })
      }
  })
}




function verDesempenho() {




  rl.question("Qual o ID do flashcard que deseja ver o desempenho?", (id) => {
      id = +id
      let flashcardEncontrado = null




      for (let i = 0; i < flashcards.length; i++) {
          if (flashcards[i].id === id) {
              flashcardEncontrado = flashcards[i]
          }
      }




      if (flashcardEncontrado === null) {
          console.log("Nenhum flashcard encontrado")




          mostrarMenu()




      } else {




          let tentativas = flashcardEncontrado.acertos + flashcardEncontrado.erros




          console.log("Pergunta: ", flashcardEncontrado.pergunta)
          console.log("Resposta: ", flashcardEncontrado.resposta)
          console.log("Matéria: ", flashcardEncontrado.materia)
          console.log("Dificuldade: ", flashcardEncontrado.dificuldade)
          console.log("Quantidade de acertos: ", flashcardEncontrado.acertos)
          console.log("Quantidade de erros: ", flashcardEncontrado.erros)
          console.log("Tentativas: ", tentativas)
      }




      if (flashcardEncontrado.acertos > flashcardEncontrado.erros) {
          console.log("Bom desempenho!")
      } else if (flashcardEncontrado.acertos === flashcardEncontrado.erros) {
          console.log("Precisa praticar mais!")
      } else if (flashcardEncontrado.erros > flashcardEncontrado.acertos) {
          console.log("Necessário revisar o conteúdo!")
      }








      mostrarMenu()
  })
}




function flashcardComMaisErros() {




  let flashComMaisErros = 0




  for (let i = 0; i < flashcards.length; i++) {
      flashComMaisErros = flashcards[i]
      if (flashcards[i].erros > flashComMaisErros) {
          flashComMaisErros = flashcards[i]
      }




      console.log("Flashcard com mais erros:")




      console.log(flashComMaisErros.id)
      console.log(flashComMaisErros.pergunta)
      console.log(flashComMaisErros.resposta)
      console.log(flashComMaisErros.materia)
      console.log(flashComMaisErros.dificuldade)
      console.log(flashComMaisErros.acertos)
      console.log(flashComMaisErros.erros)
  }
  mostrarMenu()
}




function estatisticasGerais() {




  let flashCont = 0




  let acertosCont = 0
  let errosCont = 0




  for (let i = 0; i < flashcards.length; i++) {
      flashCont++




      if (flashcards[i].acertos) {
          acertosCont++
      }
      if (flashcards[i].erros) {
          errosCont++
      }
  }




  let total = acertosCont + errosCont




  console.log("Total de flashcards:", flashCont)
  console.log("Total de acertos:", acertosCont)
  console.log("Total de erros:", errosCont)
  console.log("Total de respostas:", total)




  mostrarMenu()
}




function listarMaterias() {




  let materia = []


   console.log("Matérias das flashcards:")


  for (let i = 0; i < flashcards.length; i++) {
      let mat = flashcards[i].materia




      let jaExiste = false




      for (let j = 0; j <= materia.length; j++) {
          if (mat === materia[j]) {
              jaExiste = true
          }
      }




      if (jaExiste === false) {
          materia.push(mat)
      }
  }


  for (let i = 0; i < materia.length; i++) {
   console.log(materia[i])
  }






  mostrarMenu()
}


mostrarMenu()















