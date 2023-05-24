const frm = document.querySelector("form");
const respErros = document.querySelector("#outErros");
const respChances = document.querySelector("#outChances");
const respDica = document.querySelector("#outDica");

const erros = [];
const sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6;

frm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    
    if (sorteado == num){
        respDica.innerText = `Parabéns!!! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true; //troca status dos botões
        frm.btNovo.className = "exibe"
    }
    else {
        if (erros.includes(num)){
            alert(`Você já apostou o númerp ${num}. Tente outro...`)
        }
        else{
            erros.push(num);
            const numErros = erros.length;
            const numChances = chances - numErros;

            respErros.innerText = `${numErros} (${erros.join(",")})`
            respChances.innerText = numChances;
            if (numChances == 0){
                alert("Suas chances acabaram...");
                frm.btSubmit.disabled = true;
                frm.btNovo.className = "exibe"
                respDica.innerText = `Game Over! Número sorteado: ${sorteado}`
            }
            else {
                const dica = num < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Teste um número ${dica} que ${num}`
            }
        }
    }
    frm.inNumero.value = "" //limpa cammpo de entrada
    frm.inNumero.focus()

    frm.btNovo.addEventListener("click", () =>
    {
        location.reload()
    })
})