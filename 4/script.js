function mostraNome(){
    let nome = document.getElementById("name").value;
    alert(nome);
}

let btn = document.getElementById("btnMostra");
btn.addEventListener('click', mostraNome)
