let data = new Date();
let novaData = new Date();

novaData.setMonth(data.getMonth()+2);

let mes = novaData.getMonth();

let resultado = document.getElementById("resultado");

if(mes == 0){
    resultado.textContent = 12; 
} else {
    resultado.textContent = mes;
}


