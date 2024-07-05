import { Stack } from "../interface/Stack";

const pilha = new Stack<string>();

pilha.push("Prato Verde");
pilha.push("Prato Azul");
pilha.push("Prato Branco");
pilha.push("Prato Amarelo");
pilha.push("Prato Vemelho");

pilha.printStack();

pilha.pop(); //POP remove o primeiro elemento da pilha
console.log("\nElemento removido da pilha: ")
pilha.printStack();

pilha.push("Prato Rosa"); //PUSH adiciona um elemento na primeira posição da lista
console.log("\nElemento adicionado na pilha: ")
pilha.printStack();

console.log("\nElemento no topo da pilha na pilha: " + pilha.peek()); //PEEK destaca o elemento na primeira posição da lista
pilha.printStack();

console.log("\nElemento Prato Rosa existe na pilha?: " + pilha.contains("Prato Rosa")); //CONTAINS verifica se o elemento existe na pilha
pilha.printStack();

console.log("\nQuantos elementos possui a pilha?: " + pilha.count()); //COUNT diz o número de elementos da pilha

// import { Stack } from "../interface/Stack";

// import { Stack } from "../interface/Stack";
// const pilha = new Stack<string>();

// pilha.push("Prato Verde");
// pilha.push("Prato Azul");
// pilha.push("Prato Branco");
// pilha.push("Prato Amarelo");
// pilha.push("Prato Vermelho");

// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nRemover Elemento: " + pilha.pop());

// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nAdicionar Elemento 11: ");

// pilha.push("Prato Roxo");

// console.log("\nExibir todos os Elementos da pilha: ");

// pilha.printStack();

// console.log("\nExibir o Primeiro Elemento da pilha: " + pilha.peek());

// console.log("\nExibir o Tamanho da pilha: " + pilha.count());

// console.log("\nChecar se o Elemento Prato Verde existe na pilha? " + pilha.contains("Prato Verde"));

// console.log("\nChecar se o Elemento Prato Verde Limão existe na pilha? " + pilha.contains("Prato Verde Limão"));

// console.log("\nLimpar a pilha");

// pilha.clear();

// console.log("\nA pilha está vazia? " + pilha.isEmpty());