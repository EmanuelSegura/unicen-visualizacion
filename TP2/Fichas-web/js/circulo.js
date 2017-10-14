//Crear Circulo
class Circulo{
  constructor(posX,posY,radio,angle,color){
    this.posX = posX;
    this.posY = posY;
    this.radio = radio;
    this.angle = angle;
    this.color = color;
    this.seleccionado = false;
    this.id = 0;
  }
  draw(){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radio,this.angle,Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  click(clix,cliy){
    let x =  Math.pow((clix-this.posX),2);
    let y =  Math.pow((cliy-this.posY),2);
    let d1 = Math.sqrt(x+y);
    return(d1 <= this.radio);
}
setSeleccion(){
  this.seleccionado=!this.seleccionado;
}

};
