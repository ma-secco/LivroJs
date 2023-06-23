const prompt = require("prompt-sync")()

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")
const alunos = [];


do {
    const nome = prompt("Nome aluno: ")
    if (nome == "Fim" || nome == "fim")  break

    const nota = prompt("Nota: ")

    alunos.push({nome,nota})
    console.log(`Ok! ${nome} cadastrado (a)...`)
}
while (true)