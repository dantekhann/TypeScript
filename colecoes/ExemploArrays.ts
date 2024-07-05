//Exemplo1: import readlinesync = require("readline-sync");

// const numeros: Array<number> = new Array<number>(1,2,3,4,5,6,7,8,9,10);

// //numeros.push(readlinesync.questionFloat("Digite um numero: ")); //adiciona o numero ao final
// numeros.unshift(2.5, 3.6, 8); //adiciona o numero/s no inicio

// //-----------------------------Só funciona para dados indexados---------
// for (let numero of numeros) console.log(numero);
// console.log(numeros);
// console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(5)}`);
// console.log(`\nA posição do elemento 50 é: ${numeros.indexOf(50)}`);
// console.log(`\nA posição do elemento 7 é: ${numeros.indexOf(7)}`); //retorna a primeira ocorrencia, o exemplo possui 2 numeros 7

// console.log(`\nExiste no Array o elemento 5? ${numeros.includes(5)}`) //retorna true or false

// //atualização do valor

// numeros[numeros.indexOf(5)] = 10; //trocou o numero 5 pelo 10

// console.table(numeros); //cria uma tabela com o vetor (esqueda) e o valor (direita)

// //PARA REMOVER
// numeros.splice(numeros.indexOf(10), 1); //o numero 1 é para remover o número específico, se colocar outro ele apaga os demais a partir do 10

// console.table(numeros);

//Exemplo2:
import readlinesync = require("readline-sync");
const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

for (let nota of notas) {
  //o laço FOR OF é uma simplificação do laço FOR criado para percorrer arrays e coleções
  console.log(nota.toFixed(1));
}

console.log("\n Novas Notas: ");
notas.push(4.0); //PUSH é usado para adicionar UMA nota (adiciona NO FINAL)

notas.unshift(2.5, 9.0); //UNSHIFT adiciona mais notas

for (let nota of notas) {
  //o laço FOR OF é uma simplificação do laço FOR criado para percorrer arrays e coleções (adiciona NO INÍCIO)
  console.log(nota.toFixed(1));
}

console.log("\nO índice de nota 2.5 é: " + notas.indexOf(2.5)); //IndexOf mostra a posição do elemento dentro do Array
console.log(
  "\nA nota 2.5 está cadastrada no Array notas: " + notas.includes(2.5)
); //INCLUDES é um dado boleano que verifica se o elemento existe no array

notas[notas.indexOf(7.0)] = 6.0; //A nota que anteriormente era 7.0 virou 6.0 USANDO O MÉTODO INDEX.OF
console.log("\n Exibir Nota Alterada: ");
for (let nota of notas) {
  console.log(nota.toFixed(1));
}

notas.splice(notas.indexOf(2.5), 1); //SPLICE possui DOIS PARÂMETROS: ÍNDICE DA NOTA (index of) e NÚMERO DE NOTAS A SE APAGAR A PARTIR DO ÍNDICE (1 = uma nota)
console.log("\nNotas com 2.5 apagado");
for (let nota of notas) {
  console.log(nota.toFixed(1)); //nota 2.5 apagada
}
