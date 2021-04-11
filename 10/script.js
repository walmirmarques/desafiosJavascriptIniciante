function somaDois(){
    let numero1 = Number(document.getElementById("number1").value);
    let numero2 = Number(document.getElementById("number2").value);
    let resultado = document.getElementById("resultadoSoma");


    if( Number(numero1)  && Number(numero2)){
        resultado.textContent = numero1 + numero2;
    } else {
        resultado.textContent = 'Digite um número válido';
    }
}


let soma = document.getElementById("btnSoma");
soma.addEventListener('click', somaDois);
