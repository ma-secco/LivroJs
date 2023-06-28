const prompt = require("prompt-sync")()

console.log("Informe os alunos. Após, digite 'Fim' no nome para sair")
const alunos = [];

do {
    const nome = prompt("Nome aluno (a): ")
    if (nome == "Fim" || nome == "fim")  break

    const nota = prompt("Nota (0-10): ")

    alunos.push({nome,nota})
    console.log(`Ok! ${nome} cadastrado (a)...`)
}
while (true)

console.log("-".repeat(40));

const maiorNota = alunos.reduce((a, b) => Math.max(a, b.nota), 0)
console.log(`Maior nota: ${maiorNota}`)
if (maiorNota >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maiorNota)
    for (const destaque of destaques){
        console.log(`- ${destaque.nome}`)
    }
}
else {
    console.log('Não há alunos em destaque na turma')
}