function writeMessage(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "<p> Esse texto foi inserido pelo javascrip </p>";
}

let btnResultado = document.getElementById("exibeResultado");
btnResultado.addEventListener('click', writeMessage)