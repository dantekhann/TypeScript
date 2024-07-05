//import readlinesync = require("readline-sync"); //importação da biblioteca javascript
//O benefício das funções é a limpeza e clareza do código
import readline from "readline-sync";

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat("Digite o primeiro numero: ");
numero2 = readline.questionFloat("Digite o segundo numero: ");

console.log("O resultado da soma é: " + somar(numero1, numero2));
console.log("O resultado da subtração é: " + subtrair(numero1, numero2));
console.log("O resultado da multiplicação é: " + multiplicar(numero1, numero2));
console.log("O resultado da divisão é: " + dividir(numero1, numero2));

about();

function somar(numero1: number, numero2: number): number {
  return numero1 + numero2;
}
function subtrair(numero1: number, numero2: number): number {
  return numero1 - numero2;
}
function multiplicar(numero1: number, numero2: number): number {
  return numero1 * numero2;
}
function dividir(numero1: number, numero2: number): number {
  return numero1 / numero2;
}

function about(): void {
  console.log("Progaminha de leve");
}
