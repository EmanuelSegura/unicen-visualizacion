var canvas = document.getElementById("canvas");

Tablero(canvas);

// function Circle(paramPosX, paramPosY,paramRadio,paramColor){
//   this.posX = paramPosX;
//   this.posY = paramPosY;
//   this.radio = paramRadio;
//   this.color = paramColor;
// }

function Tablero (canvas){

  var ctx=canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,20,500,300);


};
