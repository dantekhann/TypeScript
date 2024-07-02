import { Stack } from "../interface/Stack";
import leia from 'readline-sync'
const pilha = new Stack<string>();

let continua
let opcao: number;
let livro:string;
let verdadeiro = true;

while (verdadeiro) {
  console.log("---------BIBLIOTECA-------");
  console.log("1 - Adicionar livro: ");
  console.log("2 - Listar Todos os Livros: ");
  console.log("3 - Excluir Livro: ");
  console.log("0 - Sair");
  console.log("---------------------------");

  opcao = leia.questionInt("Digite uma das opcoes a cima: ");

  switch (opcao) {
    case 1:
      let nomedolivro = leia.question(
        "Digite o nome do livro para adicionar: "
      );
      pilha.push(nomedolivro);
      console.log("\n\nLivro Adicionado!");
      break;

    case 2:
      console.log("\n\nLista de livros");
      pilha.printStack();
      break;

    case 3:
      pilha.pop();
      console.log("Digite o nome do livro para excluir: ")
      pilha.printStack();
      break;
  }
}
