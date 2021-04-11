function calculaMaioridade(anoNascimento){
    let anoAtual = new Date().getFullYear();
    if((anoAtual - anoNascimento) < 18){
        return "Menor de idade ..."
    } else{
        return "Maior de idade ..."
    }
}

let btnMaioridade = document.getElementById("btnMaioridade");
btnMaioridade.addEventListener('click', function(event){
    let nascimento = Number(document.getElementById("nascimento").value);
    document.getElementById("resultado").textContent = calculaMaioridade(nascimento);
})