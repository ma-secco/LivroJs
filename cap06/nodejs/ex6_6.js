const prompt = require("prompt-sync")()

console.log("Informe os clientes em ordem de chegada ou 'Fim' no nome para sair")
const clientes = []

do {
    const nome = prompt("Nome clinte: ")
    if (nome == "Fim" || nome == "fim")  break

    const idade = Number(prompt("Idade: "))
    clientes.push({nome,idade})
    console.log(`Ok! Cliente inserido na fila.`)
}
while (true)

console.log(`\nFila preferencial`)
console.log(`-`.repeat(40))

const filaPref = clientes.filter((cliente => cliente.idade > 59))

filaPref.forEach((fila,i) => {
    console.log(`${i + 1} - ${fila.nome}`)
}) 


console.log(`\nFila Normal`)
console.log(`-`.repeat(40))

const filaNormal = clientes.filter((cliente => cliente.idade < 59))

filaNormal.forEach((fila,i) => {
    console.log(`${i + 1} - ${fila.nome}`)
}) 
