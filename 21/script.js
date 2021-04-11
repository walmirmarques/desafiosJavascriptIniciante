function desconto(num1){
    return num1 - (num1 * (5/100))
}

let btnDesconto = document.getElementById("btnDesconto");
btnDesconto.addEventListener('click', function(event){
    let numero = Number(document.getElementById("numero1").value);
    document.getElementById("resultado").textContent = desconto(numero);
})