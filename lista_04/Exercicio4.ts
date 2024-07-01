import leia = require("readline-sync");
const setnumeros: Set<number> = new Set<number>([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]);

let num: number = leia.questionInt("Insere um numero ae: ");

// console.log(`\nO numero existe? ${setnumeros.has(num)}`);
if (setnumeros.has(num) == true) {
  console.log(`O numero ${num} foi encontrado`);
} else {
  console.log(`O numero ${num} deu errado`);
}
