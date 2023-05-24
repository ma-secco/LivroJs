const frm = document.querySelector("form");
const resp = document.querySelector("pre");
const carros = [];

frm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const modelo = frm.inModelo.value;
    const preco = Number(frm.inPreco.value);

    carros.push({modelo,preco});
    frm.inModelo.value = "";
    frm.inPreco.value = "";
    inModelo.focus()

    frm.btListar.dispatchEvent(new Event("click")) // dispara um evento de click em btListar
})

frm.btListar.addEventListener("click", () =>{
    if(carros.length == 0){
        alert("Não há carros na lista")
        return
    }
    const lista = carros.reduce((acumulador,carro) => //concatena a string obtendo modelo e preço de cada veículo
        acumulador + carro.modelo + "- R$:" + carro.preco.toFixed(2) + "\n", ""
    )
    resp.innerText = `Lista de carros Cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", ()=> {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))

    if (maximo == 0 || isNaN(maximo)) return

    const carrosFilter = carros.filter(carro => carro.preco <= maximo); // cria array com os carros que se encaixam no valor máximo 

    if (carrosFilter.length == 0 ){
        alert("Não há carros com preço inferior ou igual ao solicitado")
        return
    }

    let lista = carrosFilter.reduce((acumulador,carro) => 
    acumulador + carro.modelo + "- R$:" + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Carros até R$ ${maximo}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () =>{
    const desconto = Number(prompt("Qual o percentual de desconto:"))

    if(desconto == 0 || isNaN(desconto)) 
        return

    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco*desconto /100)
    }))
    let lista ="";
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$ ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})