let deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];

let lista = document.getElementById("nomes");

deuses.map(function(elemento){
    lista.innerHTML += `<li> ${elemento} </li>`
})