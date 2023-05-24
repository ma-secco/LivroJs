const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e)=>
{
    const quilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    const preco = (quilo/1000)*consumo;

    resp.innerText = `Valor a pagar R$: ${preco.toFixed(2)}`;

    e.preventDefault()
}
)


