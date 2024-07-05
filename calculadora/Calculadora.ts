import readlinesync = require("readline-sync"); //importação da biblioteca javascript

let numero1: number;
let numero2: number;

//numero1 = " se tentar colocar uma string num numero já há alerta de erro (sublinhado)"

numero1 = readlinesync.questionFloat("Digite o primeiro numero: ");
numero2 = readlinesync.questionFloat("Digite o segundo numero: ");

console.log(`Soma: ${numero1} + ${numero2} = ${numero1 + numero2}`); //$ é seguido de chaves
console.log(`Subtração: ${numero1} - ${numero2} = ${numero1 - numero2}`);
console.log(`Multiplicação: ${numero1} * ${numero2} = ${numero1 * numero2}`);
console.log(`Divisão: ${numero1} / ${numero2} = ${numero1 / numero2}`);
