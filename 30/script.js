for (let i = 0; i < 21; i++) {
    if(i % 2 == 0)    {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML += `${i} <br>`;
    }
}