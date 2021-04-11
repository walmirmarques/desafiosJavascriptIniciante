function mostraNumLetras(){
    let texto = document.getElementById("text").value;
    let numLetras = texto.length;
    alert(numLetras);
}

let btn = document.getElementById("btnMostra");
btn.addEventListener('click', mostraNumLetras)
