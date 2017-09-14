let canvas = document.getElementById("canvas");
let ctx=canvas.getContext("2d");

TableroEscenario(canvas);
TableroFichas(canvas);

//Crear tablero
function TableroEscenario (canvas){
  let ctx=canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,20,550,400);
};


//Mini tablero de Fichas para arrastrar

function TableroFichas (canvas){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(100,450,550,50);
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
let circle1 = new Circulo (150,70,36,0,'#9E52A1');
let circle2 = new Circulo (300,70,36,0,'#863089');
let circle3 = new Circulo (450,70,36,0,'#731A76');
let circle4 = new Circulo (600,70,36,0,'#5D0A60');
let circle5 = new Circulo (150,370,36,0,'#9E52A1');
let circle6 = new Circulo (300,370,36,0,'#863089');
let circle7 = new Circulo (450,370,36,0,'#731A76');
let circle8 = new Circulo (600,370,36,0,'#5D0A60');

//Circulos se dibujan
circle1.draw();
circle2.draw();
circle3.draw();
circle4.draw();
circle5.draw();
circle6.draw();
circle7.draw();
circle8.draw();

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
let rect1 = new Rectangulo (120,140,64,64,'#9E52A1');
let rect2 = new Rectangulo (270,140,64,64,'#863089');
let rect3 = new Rectangulo (420,140,64,64,'#731A76');
let rect4 = new Rectangulo (570,140,64,64,'#5D0A60');
let rect5 = new Rectangulo (120,240,64,64,'#9E52A1');
let rect6 = new Rectangulo (270,240,64,64,'#863089');
let rect7 = new Rectangulo (420,240,64,64,'#731A76');
let rect8 = new Rectangulo (570,240,64,64,'#5D0A60');

//Se dibujan los rectangulos
rect1.draw();
rect2.draw();
rect3.draw();
rect4.draw();
rect5.draw();
rect6.draw();
rect7.draw();
rect8.draw();

//Arreglo de fichas del tablero
let arrTablero = new Array();

//Relleno de arreglo
arrTablero.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4,circle5,rect5,circle6,rect6,circle7,rect7,circle8,rect8);

//Arreglo de fichas para mover

let arrFichas = new Array();

//Relleno del arreglo de fichas
arrFichas.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4,circle5,rect5,circle6,rect6,circle7,rect7,circle8,rect8);

//Arreglo fichas elegidas

let elegido = new Array();
elegido.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4,circle5,rect5,circle6,rect6,circle7,rect7,circle8,rect8);
