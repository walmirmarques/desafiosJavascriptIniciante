function validaCpf(){
    let cpf = document.getElementById("cpf").value;
    let cpf2 = cpf.replace(/[^\d]/g, "");
    //realizar a formatação...
    cpf2.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");

    let cpfValido = document.getElementById("cpfSemNumero");
    cpfValido.textContent = cpf2;
}

let cpf = document.getElementById("cpf");
cpf.addEventListener('input', validaCpf)

