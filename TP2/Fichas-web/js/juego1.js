let canvas = document.getElementById("canvas");
let ctx=canvas.getContext("2d");

TableroEscenario(canvas);
TableroFichas(canvas);

//Crear tablero
function TableroEscenario (canvas){
  let ctx=canvas.getContext("2d");
  ctx.fillStyle="#FFE400";
  ctx.fillRect(700,20,550,390);
  ctx.strokeStyle="black";
  ctx.strokeRect(700,20,550,390);
};

//Mini tablero de Fichas para arrastrar

function TableroFichas (canvas){
  let ctx = canvas.getContext("2d");
  ctx.fillStyle="FFE400";
  ctx.fillRect(100,20,550,390);
  ctx.strokeStyle="black";
  ctx.strokeRect(100,20,550,390);
}

//Instancias del Circulo
let circle1 = new Circulo (750,70,36,0,'#FFFFAA');
let circle2 = new Circulo (900,70,36,0,'#FFFFAA');
let circle3 = new Circulo (1050,70,36,0,'#FFFFAA');
let circle4 = new Circulo (1200,70,36,0,'#FFFFAA');
let circle1F = new Circulo (150,70,36,0,'red');
let circle2F = new Circulo (300,70,36,0,'red');
let circle3F = new Circulo (450,70,36,0,'red');
let circle4F = new Circulo (600,70,36,0,'red');

//Instancias del Rectangulo
let rect1 = new Rectangulo (720,150,64,128,'#FFFFAA');
let rect2 = new Rectangulo (870,150,64,128,'#FFFFAA');
let rect3 = new Rectangulo (1020,150,64,128,'#FFFFAA');
let rect4 = new Rectangulo (1170,150,64,128,'#FFFFAA');
let rect1F = new Rectangulo (120,150,64,128,'red');
let rect2F = new Rectangulo (270,150,64,128,'red');
let rect3F = new Rectangulo (420,150,64,128,'red');
let rect4F = new Rectangulo (570,150,64,128,'red');

//Instancias del Cuadrado
let cuad1 = new Cuadrado (720,320,64,64,'#FFFFAA');
let cuad2 = new Cuadrado (870,320,64,64,'#FFFFAA');
let cuad3 = new Cuadrado (1020,320,64,64,'#FFFFAA');
let cuad4 = new Cuadrado (1170,320,64,64,'#FFFFAA');
let cuad1F = new Cuadrado (120,320,64,64,'red');
let cuad2F = new Cuadrado (270,320,64,64,'red');
let cuad3F = new Cuadrado (420,320,64,64,'red');
let cuad4F = new Cuadrado (570,320,64,64,'red');


//Arreglo de fichas del tablero
let arrTablero = new Array();

//Relleno de arreglo
arrTablero.push(circle1,circle2,circle3,circle4,rect1,rect2,rect3,rect4,cuad1,cuad2,cuad3,cuad4);

//Arreglo de fichas para mover
let arrFichas = new Array();

//Relleno del arreglo de fichas
arrFichas.push(circle1F,circle2F,circle3F,circle4F,rect1F,rect2F,rect3F,rect4F,cuad1F,cuad2F,cuad3F,cuad4F);

for (let i = 0; i < arrTablero.length; i++) {
  arrTablero[i].draw();
}

for (let i = 0; i < arrFichas.length; i++) {
  arrFichas[i].draw();
}

let figuraElegida;
let contadorAcertadas = 0; //variable para contar las acertadas en el Safe Area

canvas.onmousedown=function(event){
  for (let i = 0; i < arrFichas.length; i++){
    if(arrFichas[i].click(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop)){ //Compara si (x,y) esta dentro del radio del circulo
      arrFichas[i].setSeleccion();
      figuraElegida = arrFichas[i].id; //Para comparar id de ficha elegida con la forma del tablero en mouseup.
      arrFichas[i].posX = event.clientX-canvas.offsetLeft;
      arrFichas[i].posY = event.clientY-canvas.offsetTop;
     break;
    }
  }

  canvas.onmousemove = function(event) {

    for (let i = 0; i < arrFichas.length; i++) {

      if(arrFichas[i].seleccionado == true){
        console.log('if');
        arrFichas[i].posX = event.clientX-canvas.offsetLeft; //dibuja en todo el x,y y lo va limpiando para arrastrar la figura sola.
        arrFichas[i].posY = event.clientY-canvas.offsetTop;

        ctx.clearRect(0,0,canvas.width, canvas.height); //limpia continuamente el canvas

        TableroEscenario(canvas); //redibuja 1 vez
        TableroFichas(canvas); //redibuja 1 vez

        for (let i = 0; i < arrTablero.length ; i++) { //dibuja todas las formas del tablero

          arrTablero[i].draw();

        }
        for (let j = 0; j < arrFichas.length; j++) { //dibuja todas las fichas

          arrFichas[j].draw();

        }

      }
    }
    canvas.onmouseup = function(event) {



      for (let i = 0; i < arrTablero.length; i++) {
         if (arrTablero[i].click(event.clientX-canvas.offsetLeft,event.clientY-canvas.offsetTop) && (arrTablero[i].id == figuraElegida)) {
           console.log(figuraElegida);
           contadorAcertadas++;
           if (contadorAcertadas == arrTablero.length){
             ganaste.innerHTML ="Ganaste!";
           }

      }


      for (let i = 0; i < arrFichas.length; i++) { //Lo vuelve false para poder agarrarlo en caso de ser necesario. (switch)
        if (arrFichas[i].seleccionado==true) {
          arrFichas[i].setSeleccion();
        }
      }

      canvas.onmousemove = null;

      for (let i = 0; i < arrTablero.length ; i++) {

        arrTablero[i].draw();

      }
      for (let j = 0; j < arrTablero.length; j++) {
        arrFichas[j].draw();

      }
    }
  }
}
};
