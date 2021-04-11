const larguraDaTela = window.screen.availWidth;
var position = 0;
var aumentar = true;

var animacaoFrame = 0;

const animacaoUrso = [
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png',
];

setInterval(function(){

	if( position > (larguraDaTela + 200) ) {
		return false;
	}
	
	document.getElementById("urso-img").src = animacaoUrso[animacaoFrame];
	
	
	document.getElementById("urso-img").style = "left: " + position + "px;";
	
	position +=4;
	
	animacaoFrame++;
	if(animacaoFrame > 2) {
		animacaoFrame = 0;
	}

	
}, 200);

