function existePalavra(frase, palavra){
    if(frase.indexOf(palavra) != -1){
        return "É verdadeiro!!!"
    } else {
        return "É falso!!!"
    }
}

let btnEncontraFrase = document.getElementById("btnEncontraFrase");
btnEncontraFrase.addEventListener('click', function(event){
    let frase = document.getElementById("frase").value;
    let palavra = document.getElementById("palavra").value;

    document.getElementById("resultado").textContent = existePalavra(frase, palavra);
})