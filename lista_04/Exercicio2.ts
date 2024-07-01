import readlinesync = require("readline-sync");
const numeros: Array<number> = new Array<number>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

let numero: number = readlinesync.questionInt("Digita ae ");

if (numeros.indexOf(numero) == -1) {
  console.log(`O numero ${numero} NAO foi encontrado`);
} else {
  console.log(`O numero ${numero} foi encontrado`);
}
