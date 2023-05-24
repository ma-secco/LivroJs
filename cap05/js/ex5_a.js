const prompt = require("prompt-sync")()

console.log("Programa Repete Fruta")
const fruta = prompt("Fruta:");
const num = Number(prompt("Número:"));

let resp = " ";

if (num <= 0){
    return
}
else {
    for(i = 1; i < num; i++) {
        resp = resp + `${fruta} ` + `* `
    }
    console.log(resp + fruta);
}