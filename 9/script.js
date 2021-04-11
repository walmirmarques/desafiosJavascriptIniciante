function validaCpf(){
    let cpf = document.getElementById("cpf").value;
    let cpf2 = cpf.replace('.', '');
        cpf2 = cpf2.replace('.', '');
        cpf2 = cpf2.replace('-', '');

    let cpfValido = document.getElementById("cpfSemNumero");
    cpfValido.textContent = cpf2;
}

let cpf = document.getElementById("cpf");
cpf.addEventListener('input', validaCpf)

