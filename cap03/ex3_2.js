const prompt = require("prompt-sync")();
const veiculo = prompt("veículo: ");
const preco = Number(prompt("Preço R$:"));
const entrada = preco*0.5;
const parcela = (preco*0.5)/12;
console.log(`Promoção: ${veiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$: ${parcela.toFixed(2)}`);