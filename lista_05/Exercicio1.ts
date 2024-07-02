import { Queue } from "../interface/Queue";
const leia = require("readline-sync"); //puxa "toda" a biblioteca readline-sync e suas configurações
const cliente = new Queue<string>();

let opcao: number;
let verdeiro = true;

while (verdeiro) {
  console.log("---------BANCODOPOVO-------");
  console.log("1 - Adicionar Cliente: ");
  console.log("2 - Consultar Lista: ");
  console.log("3 - Excluir Cliente: ");
  console.log("0 - Sair");
  console.log("----------------------------");

  opcao = leia.questionInt("Digite uma das opcoes a cima: ");

  switch (opcao) {
    case 1:
      let nomedocliente = leia.question(
        "Digite o nome do cliente para adicionar: "
      );
      cliente.enqueue(nomedocliente);
      console.log("\n\nCliente Adicionado!");
      break;

    case 2:
      console.log("\n\nClientes da lista");
      cliente.printQueue();
      break;

    case 3:
      console.log("\n\nDigite o nome do cliente para excluir: ");
      cliente.printQueue();
      break;
    case 4:
      console.log("cabô");
      cliente.printQueue();
      break;
  }
}
