let canvas = document.getElementById("canvas");
let ctx=canvas.getContext("2d");

TableroEscenario(canvas);
TableroFichas(canvas);

//Crear tablero
function TableroEscenario (canvas){
  let ctx=canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,20,500,300);
};


//Fichas para arrastrar

function TableroFichas (canvas){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,350,500,50);
}


//Crear Circulo
class Circulo{
  constructor(posX,posY,radio,angle,color){
    this.posX = posX;
    this.posY = posY;
    this.radio = radio;
    this.angle = angle;
    this.color = color;
  }
  draw(){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radio,this.angle,Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  seleccionar(clix,cliy){
    let x =  Math.pow((clix-this.posX),2);
    let y =  Math.pow((cliy-this.posY),2);
    let d1 = Math.sqrt(x+y);
    return(d1 < this.radio);
}

};

//Instancias del Circulo
let circle1 = new Circulo (145,65,36,0,'#9E52A1');
let circle2 = new Circulo (145,130,36,0,'#863089');
let circle3 = new Circulo (145,195,36,0,'#731A76');
let circle4 = new Circulo (145,260,36,0,'#5D0A60');

//Circulos se dibujan
circle1.draw();
circle2.draw();
circle3.draw();
circle4.draw();

//Crear Rectangulo
class Rectangulo{
  constructor(posX,posY,width,height,color){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color= color;
  }
  draw(){
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.rect(this.posX,this.posY,this.width,this.height);
    ctx.fill();
    ctx.closePath();
  }
  seleccionar(clix,cliy) {
  var c=document.getElementById("canvas");
  var fig = c.getBoundingClientRect();
  return(this.posX-canvas.offsetLeft < (clix - fig.left)) && (this.lado + this.posX-canvas.offsetLeft > (clix - fig.left)) &&
  (this.posY-canvas.offsetTop < (cliy- fig.top)) && (this.lado + this.posY-canvas.offsetTop > (cliy- fig.top));
}
};

//Instancias del rectangulo
let rect1 = new Rectangulo (290,65,64,64,'#9E52A1');
let rect2 = new Rectangulo (290,130,64,64,'#863089');
let rect3 = new Rectangulo (290,195,64,64,'#731A76');
let rect4 = new Rectangulo (290,260,64,64,'#5D0A60');

//Se dibujan los rectangulos
rect1.draw();
rect2.draw();
rect3.draw();
rect4.draw();

//Arreglo de fichas del tablero
let arrTablero = new Array();

//Relleno de arreglo
arrTablero.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4);

//Arreglo de fichas para mover

let arrFichas = new Array();

//Relleno del arreglo de fichas
arrFichas.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4);

//Arreglo fichas elegidas

let elegido = new Array();
elegido.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4);

canvas.onmousedown=function(event){
  for (let i = 0; i < arrTablero.length; i++){
    if(arrTablero[i].seleccionar(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop)){

      elegido[i] = true;
      let ficha = arrFichas[i];
      arrFichas[i].posX = event.clientX-canvas.offsetLeft;
      arrFichas[i].posY = event.clientY-canvas.offsetTop;
      break;
    }
  };


  canvas.onmousemove = function(event) {

      for (let i = 0; i < arrTablero.length; i++) {

        if(elegido[i]){
          arrFichas[i].posX = event.clientX-canvas.offsetLeft;
          arrFichas[i].posY = event.clientY-canvas.offsetTop;
          // ctx.clearRect(0,0,canvas.width, canvas.height);

          for (let i = 0; i < arrTablero.length; i++) {

            ArrTablero[i].draw();

              }
          for (let i = 0; i < arrTablero.length; i++) {

            arrFichas[i].draw();

          }

        }
      }
      canvas.onmouseup = function(event) {

        canvas.onmousemove = null;

        for (let i = 0; i < dificultad; i++) {
          if (arrTablero[i].seleccionar(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop) && arrTablero[i].comparaFigura(figura.id)) {

            figura.colocar(figurasFijas[i].posX,figurasFijas[i].posY);
            ctx.clearRect(0,0,canvas.width, canvas.height);

          }
          elegido[i] = false;
        }
          for (let i = 0; i < arrTablero.length; i++) {
            arrTablero[i].draw();

          }
          for (let i = 0; i < arrTablero.length; i++) {
            arrFichas[i].draw();
          }
        }
    }
}
