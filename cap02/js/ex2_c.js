const frm = document.querySelector("form");
const resp1 = document.querySelector("#inTotal");
const resp2 = document.querySelector("#inUnidade");

frm.addEventListener("submit", (e)=>
{
    const product = frm.inProduct.value;
    const price = Number(frm.inPrice.value);

    const promo = price*0.5

    resp1.innerText = `${product} - Promoção: Leve 3 por R$ ${(price*2 + promo).toFixed(2)}`;
    resp2.innerText = `O 3º produto custa apenas R$: ${promo.toFixed(2)}`

    e.preventDefault();

}


)