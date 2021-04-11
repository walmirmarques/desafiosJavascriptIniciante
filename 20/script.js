function multipleca(num1, num2){
    return num1 * num2;
}

let btnMultiplicar = document.getElementById("btnMultiplicar");
btnMultiplicar.addEventListener('click', function(event){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);

    document.getElementById("resultado"). textContent = multipleca(numero1, numero2);
})