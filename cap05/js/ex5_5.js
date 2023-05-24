const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let contaTotal = " ";
let numContas = 0;
let valTotal = 0; 


frm.addEventListener("submit", (e) =>
{
    e.preventDefault();

    const descricao = frm.inDescricao.value;
    const valor = Number(frm.inValor.value);

    numContas++ //cada vez que a função for executada, vai ser somada mais uma despesa.
    valTotal = valTotal + valor; //ou valTotal += valor;
    contaTotal = contaTotal + descricao + ` - R$: ${valor.toFixed(2)} \n`;

    resp1.innerText =  `${contaTotal} ----------------------------------`
    resp2.innerText = ` ${numContas} Conta(s) - Total R$: ${valTotal}`;

    frm.inDescricao.value = " ";
    frm.inValor.value = " ";
    frm.inDescricao.focus();
})