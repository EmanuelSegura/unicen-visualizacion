var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.onclick = pintarOnClick;

function Circle(paramPosX, paramPosY,paramRadio,paramColor){
  this.posX = paramPosX;
  this.posY = paramPosY;
  this.radio = paramRadio;
  this.color = paramColor;
}

function pintarOnClick(e){

    var posX = e.clientX;
    var posY = e.clientY;
    var circulo = new Circle(posX,posY,100,"#ffffff");

    var img = new Image();
    img.src = "images.png";

    img.onload = function(){
      var image = ctx.drawImage(img,posX-100,posY-100);

      ctx.fillStyle = image;
      ctx.beginPath();
      // ctx.arc(circulo.posX,circulo.posY,circulo.radio,0,Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }
}
