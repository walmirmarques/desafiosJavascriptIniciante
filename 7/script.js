function bulbOn (){
    let bulb = document.getElementById("bulbOff");
    bulb.src = 'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/lampada-on.jpg'
}

let bulb = document.getElementById("bulbOff");
bulb.addEventListener('mouseover', bulbOn)

