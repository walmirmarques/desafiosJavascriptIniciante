let i = 1;

do{
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `${i} <br>`;
    i++;
} while(i <= 10);