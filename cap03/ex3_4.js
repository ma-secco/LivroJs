const prompt = require("prompt-sync")();
const racao = Number(prompt("Peso da ração em Kg:"));
const consumo = Number(prompt("Consumo diário (gr): "));

//vai mostrar quantos dias a ração vai durar arredendodando pra baixo
const dias = Math.floor((racao*1000)/consumo);
const sobra = (racao*1000) % consumo;

console.log(`Duração: ${dias} dias`);
console.log(`Sobra: ${sobra} gr`);