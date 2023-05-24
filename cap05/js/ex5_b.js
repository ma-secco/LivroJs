const prompt = require("prompt-sync")();

console.log("Programa criação de Chinchilas");

let chin = Number(prompt("Nº de Chinchilas:"));
if (chin < 2){
    console.log("Número inválido. O Número inicial deve ser igual ou maior a 2.")
    return;
}

const anos = Number(prompt("Nº Anos:"));
let resp = " "



console.log(`1º Ano: ${chin} Chinchilas`)

for (i = 2; i <= anos; i++){
    chin = chin * 3;
    resp = `${i}º Ano: ${chin} Chinchilas`
    console.log (resp)
}