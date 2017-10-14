//Crear Cuadrado
class Cuadrado{
  constructor(posX,posY,width,height,color){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color= color;
    this.seleccionado = false;
    this.id = 2;
  }
  draw(){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.fill();
    ctx.closePath();
  }
  click(clix,cliy) {
  let canvas=document.getElementById("canvas");
  let fig = canvas.getBoundingClientRect();
  return(this.posX-canvas.offsetLeft < (clix - fig.left)) && (this.width + this.posX-canvas.offsetLeft > (clix - fig.left)) &&
  (this.posY-canvas.offsetTop < (cliy- fig.top)) && (this.height + this.posY-canvas.offsetTop > (cliy- fig.top));
}
setSeleccion(){
  this.seleccionado=!this.seleccionado;
}
};
