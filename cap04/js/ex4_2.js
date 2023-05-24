const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>
{


    const name = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = Number(frm.inAltura.value);
    
    let peso;
    if (masculino === true) {
        peso = 22*Math.pow(altura,2);
    }
    else {
        peso = 21*Math.pow(altura,2);
    }

    //podemos trocar o loop de cima por > const peso = masculino ? 22*Math.pow(altura, 2) : 21*Math.pow(altura, 2);

    resp.innerText = `${name}: seu Peso Ideal é ${peso.toFixed(3)}`
    e.preventDefault();
})

frm.addEventListener("reset", () =>
{
    resp.innerText = ""
})