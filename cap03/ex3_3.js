const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário R$:"));
const time = Number(prompt("Tempo de empresa (anos): "));

const quadrienios = Math.floor(time/4);
const aumento = (salario*0.01)*quadrienios;

console.log(`Qadriênios:${quadrienios}`);
console.log(`Salário Final R$: ${(salario+aumento).toFixed(2)}`)



