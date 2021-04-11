for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10 ; j++) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML += `${i} X ${j} = ${i*j} <br>`  ;   
    }
}