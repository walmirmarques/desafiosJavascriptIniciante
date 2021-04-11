let data = new Date();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();


let resultado = document.getElementById("resultado");
resultado.textContent = `${dia} / ${mes+1} / ${ano}`;