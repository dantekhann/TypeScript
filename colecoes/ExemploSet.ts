import readlinesync = require("readline-sync");

//Set NÃO ACEITA VALORES REPETIDOS - fator positivo

const frutas: Set<string> = new Set<string>();

// .add é exclusivo da função Set
frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");

console.table(frutas); //manteve a ordem e ignorou o repetido

console.log(`\nA fruta Caqui existe? ${frutas.has("Caqui")}`); //has vê se existe ou não e retorna true or false

//para apagar

frutas.delete("Caqui");
console.table(frutas);
