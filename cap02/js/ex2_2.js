const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e)=> {
    const film = frm.inTitulo.value;
    const time = Number(frm.inDuracao.value);

    const hours = Math.floor(time/60);
    const minutes = time % 60;

    resp1.innerText = film;
    resp2.innerText = `${hours} horas e ${minutes} minutos`

    e.preventDefault()
})