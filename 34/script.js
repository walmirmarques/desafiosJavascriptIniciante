function acertouOuErrou(numero){
    let numeroAleatorio = parseInt(Math.random() * 10);
    if(numero == numeroAleatorio){
         return alert('você acertou !!!');
    } else {
         return alert('Você errou !!!');
    }
}

let btnAcertou = document.getElementById("btnAcertou");
btnAcertou.addEventListener('click', function(event){
    let numero = Number(document.getElementById("numero").value);
    acertouOuErrou(numero);
})