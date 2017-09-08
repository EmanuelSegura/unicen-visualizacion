var canvas = document.getElementById("canvas");

Tablero(canvas);

var circle1 = new Circulo(4,4,10,'#141444');



//Constructor
 function Circulo(paramPosX, paramPosY,paramRadio,paramColor){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = paramColor;
};

//Definiendo la clase circulo
function Circulo (){
  this.posX = 4;
  this.posY = 4;
  this.radio = 10;
  this.color = "#141444";
};

Circulo.prototype.Draw = function() {

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.fill();
//ctx.ClosePath(); ???? error
};

circle1.Draw();

function Tablero (canvas){
  var ctx=canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,20,500,300);
};
