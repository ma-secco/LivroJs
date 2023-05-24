const frm = document.querySelector("form");
const resp = document.querySelector('h3');

frm.addEventListener("submit", (e) =>
{
    e.preventDefault();

    const hora = Number(frm.inHora.value);
    let horaFranca = hora + 5;

    if (horaFranca>24){
        let horaFranca= horaFranca - 24;
        return
    }
    resp.innerText = `Hora na França: ${horaFranca.toFixed(2)}`
})