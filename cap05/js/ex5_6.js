const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) =>
{
    e.preventDefault();

    const num = Number(frm.inNumero.value);
    
    let temDivisor = 0;
    for (let i = 2; i<= num/2; i++) {
        if (num % i == 0){
            temDivisor = 1; 
            break
        }
    }

    if (num > 1 && temDivisor == false) //ou !temDivisor
    {
        resp.innerText = `${num} é um número primo`
    }
    else {
        resp.innerText = `${num} não é um número primo`
    }
})