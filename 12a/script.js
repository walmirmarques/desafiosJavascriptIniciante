
function colorChangeRed(){
    let canvaRed = document.getElementById("canva");
    canvaRed.style.backgroundColor = "red";
}

function colorChangeGreen(){
    let canvaGreen = document.getElementById("canva")
    canvaGreen.style.backgroundColor = "green";

}

let colorRed = document.getElementById("btnRed");
colorRed.addEventListener('click', colorChangeRed);

let colorGreen = document.getElementById("btnGreen");
colorGreen.addEventListener('click', colorChangeGreen);

