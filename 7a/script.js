function mostraSaudacao(){
    let nome = document.getElementById("name").value;
    let sobrenome = document.getElementById("lastName").value;

    alert('Olá ' + nome + sobrenome);
}

let mensagem = document.getElementById("message");

mensagem.addEventListener('click', mostraSaudacao)