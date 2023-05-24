const frm = document.querySelector("form");
const resp1 = document.querySelector("#medicamento");
const resp2 = document.querySelector("#total");

frm.addEventListener("submit", (e)=>
{
    const med = frm.inMed.value;
    const price = Number(frm.inPrice.value);

    const totalPrice = Math.floor(price*2);
    
    resp1.innerText = `Promoção de ${med}`;
    resp2.innerText = `Leve 2 por apenas R$: ${totalPrice.toFixed(2)}`;

    e.preventDefault;

}
)