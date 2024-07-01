import readlinesync = require("readline-sync");

const numeros: Array<number> = new Array<number>(1,2,3,4,5,6,7,8,9,10);

//numeros.push(readlinesync.questionFloat("Digite um numero: ")); //adiciona o numero ao final
numeros.unshift(2.5, 3.6, 8); //adiciona o numero/s no inicio

//-----------------------------Só funciona para dados indexados---------
for (let numero of numeros) console.log(numero);
console.log(numeros);
console.log(`\nA posição do elemento 5 é: ${numeros.indexOf(5)}`);
console.log(`\nA posição do elemento 50 é: ${numeros.indexOf(50)}`);
console.log(`\nA posição do elemento 7 é: ${numeros.indexOf(7)}`); //retorna a primeira ocorrencia, o exemplo possui 2 numeros 7

console.log(`\nExiste no Array o elemento 5? ${numeros.includes(5)}`) //retorna true or false

//atualização do valor

numeros[numeros.indexOf(5)] = 10; //trocou o numero 5 pelo 10

console.table(numeros); //cria uma tabela com o vetor (esqueda) e o valor (direita)

//PARA REMOVER
numeros.splice(numeros.indexOf(10), 1); //o numero 1 é para remover o número específico, se colocar outro ele apaga os demais a partir do 10

console.table(numeros);
