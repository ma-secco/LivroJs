const prompt = require("prompt-sync")();

const number = Number(prompt("Número: "));

const valor = number % 2 == 0 ? console.log(`${number} é par.`) : console.log(`${number} é impar.`);

//if (number === 0) {
//    console.log(number);
//} 
//else if  (number % 2 == 0){
//    console.log(`${number} é par`)
//}
//else {
//    console.log(`${number} é impar`)
//}
