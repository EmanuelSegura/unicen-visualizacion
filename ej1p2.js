var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.onclick = pintarFondo();

function pintarFondo(){

  ctx.beginPath();
  // ctx.rect(20, 20, 150, 100);
  var rectangulo = document.getElementById("divPintado");
  // ctx.fillStyle = "red";
  rectangulo.fillStyle = "red";
  ctx.fill();

}
