const frm = document.querySelector("form");
const total = document.querySelector("h3");

frm.addEventListener("submit", (e)=>
{
    const valorMin = Number(frm.inValor.value);
    const timeClient = Number(frm.inTime.value);

    const mins = (Math.ceil(timeClient/15))*valorMin;

    total.innerText = `Valor a pagar R$: ${mins.toFixed(2)}`

    e.preventDefault();
}

 )