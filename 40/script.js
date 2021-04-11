var array = new Array();

function addAoArray(item){
    array.push(item);
}

let btnItems = document.getElementById("btnItems");

btnItems.addEventListener('click', function(event){
    let lista = document.getElementById("nomes");
    lista.innerHTML = '';
    let item = document.getElementById("item").value;
    addAoArray(item);
    document.getElementById("item").value = '';

    array.map(function(elemento){
        if(elemento % 2 == 0){
            lista.innerHTML += `<li id="par"> ${elemento} </li>`
            console.log('nao')
        }
        else{
            lista.innerHTML += `<li> ${elemento} </li>`
            console.log('sim')
        }
    })
})


