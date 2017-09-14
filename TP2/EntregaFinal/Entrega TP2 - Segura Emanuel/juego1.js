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
  ctx.fillRect(100,450,550,300);
}

//Instancias del Circulo
let circle1 = new Circulo (150,70,36,0,'#9E52A1');
let circle2 = new Circulo (300,70,36,0,'#863089');
let circle3 = new Circulo (450,70,36,0,'#731A76');
let circle4 = new Circulo (600,70,36,0,'#5D0A60');
let circle1F = new Circulo (150,370,36,0,'red');
let circle2F = new Circulo (300,370,36,0,'red');
let circle3F = new Circulo (450,370,36,0,'red');
let circle4F = new Circulo (600,370,36,0,'red');

//Instancias del rectangulo
let rect1 = new Rectangulo (120,140,64,64,'#9E52A1');
let rect2 = new Rectangulo (270,140,64,64,'#863089');
let rect3 = new Rectangulo (420,140,64,64,'#731A76');
let rect4 = new Rectangulo (570,140,64,64,'#5D0A60');
let rect1F = new Rectangulo (150,420,64,64,'black');
let rect2F = new Rectangulo (300,420,64,64,'black');
let rect3F = new Rectangulo (450,420,64,64,'black');
let rect4F = new Rectangulo (600,420,64,64,'black');

//Arreglo de fichas del tablero
let arrTablero = new Array();

//Relleno de arreglo
arrTablero.push(circle1,circle2,circle3,circle4,rect1,rect2,rect3,rect4);


//Arreglo de fichas para mover

let arrFichas = new Array();

//Relleno del arreglo de fichas
arrFichas.push(circle1F,circle2F,circle3F,circle4F,rect1F,rect2F,rect3F,rect4F);
// arrFichas.push(circle1F,rect1,circle2F,rect2,circle3F,rect3,circle4F,rect4);

//Arreglo fichas elegidas

// let elegido = new Array();
// elegido.push(circle1,rect1,circle2,rect2,circle3,rect3,circle4,rect4,circle5,rect5,circle6,rect6,circle7,rect7,circle8,rect8);


for (let i = 0; i < arrTablero.length; i++) {
  arrTablero[i].draw();
}

for (let i = 0; i < arrFichas.length; i++) {
  arrFichas[i].draw();
}

let figuraElegida;
let contadorAcertadas = 0;

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
