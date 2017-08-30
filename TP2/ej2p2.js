var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function circle(paramPosX, paramPosY,paramRadio,paramColor){ //constructor circulo
this.posX = paramPosX;
this.posY = paramPosY;
this.radio = paramRadio;
this.color = paramColor;
}

function getRandomColor() { //obtener color aleatorio
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

for (var i = 0; i < 100; i++) { //i < 10 circulos

var posXRand = Math.floor((Math.random() * 600) + 1); //posicion X random para el circulo
var posYRand = Math.floor((Math.random() * 400) + 1); //posicion Y random para el circulo

var circulo = new circle(posXRand,posYRand,100,getRandomColor()); //objeto del circulo

// var gradient = ctx.createLinearGradient(posXRand,posYRand, 600, 400);
// gradient.addColorStop(0, getRandomColor());
// gradient.addColorStop(1, getRandomColor());
//
// ctx.fillStyle = gradient;
ctx.fillStyle = getRandomColor(); //color aleatorio
ctx.beginPath();
ctx.arc(circulo.posX,circulo.posY,circulo.radio,0,Math.PI * 2);
ctx.fill();
ctx.closePath();
}
