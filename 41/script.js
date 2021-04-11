var tempo = 5;
function contador(){
    
    let numero = document.getElementById("numero");
    if(tempo > 0){
        numero.textContent = tempo;
        tempo --;
    } else {
        tempo = 5;
    }
}

setInterval('contador()', 1000);
