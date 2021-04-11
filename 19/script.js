function parOuImpar(numero){
    if((numero % 2) == 0){
        return "É par !!!"
    } else {
        return "É ímpar !!!"
    }
}

let entrada = document.getElementById("numero");
entrada.addEventListener('input', function(event){
    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");
    resultado.textContent = parOuImpar(numero);
})