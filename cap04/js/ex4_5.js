const prompt = require("prompt-sync")();
const numero = prompt("Número: ");
const raiz = Math.sqrt(numero);
if (Number.isInteger(raiz)) {
    console.log(`Raiz é ${raiz}`)
}
else {
    //console.log(`Não há raiz exata para ${numero}`)
    console.log(`A raiz é aproximadamente ${raiz.toFixed(5)}`)
};