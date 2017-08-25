
$('#escalaDeGrises').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos



      for (var x=0; x<imageData.width; x++){
        for(var y=0; y<imageData.height; y++){

          //RGB
          var red = getRed(imageData,x,y);
          var green = getGreen(imageData,x,y);
          var blue = getBlue(imageData,x,y);

          var grey = ((red+green+blue)/3);

          setPixel (imageData, x, y, grey, grey, grey, 255);

        }
      }

      ctx.putImageData(imageData,0,0);//la redibujo modificado

      function getRed (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+0];
      }

      function getGreen (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+1];
      }

      function getBlue (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+2];
      }

      function setPixel(imageData, x, y, r, g, b, a){
        index = (x+y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
      }
    }

});
$('#sepia').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos



      for (var x=0; x<imageData.width; x++){
        for(var y=0; y<imageData.height; y++){

          //RGB
          var red = getRed(imageData,x,y);
          var green = getGreen(imageData,x,y);
          var blue = getBlue(imageData,x,y);

          var sepiaR = Math.floor(0.393*red + 0.769*green + 0.189*blue);
          var sepiaG = Math.floor(0.349*red + 0.686*green + 0.168*blue);
          var sepiaB = Math.floor(0.272*red + 0.534*green + 0.131*blue);

          setPixel (imageData, x, y, sepiaR, sepiaG, sepiaB, 255);

        }
      }

      ctx.putImageData(imageData,0,0);//la redibujo modificado

      function getRed (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+0];
      }

      function getGreen (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+1];
      }

      function getBlue (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+2];
      }

      function setPixel(imageData, x, y, r, g, b, a){
        index = (x+y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
      }
    }

});
$('#negativo').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos



      for (var x=0; x<imageData.width; x++){
        for(var y=0; y<imageData.height; y++){

          //RGB
          var red = getRed(imageData,x,y);
          var green = getGreen(imageData,x,y);
          var blue = getBlue(imageData,x,y);

          setPixel (imageData, x, y, 255-red, 255-green, 255-blue, 255);

        }
      }

      ctx.putImageData(imageData,0,0);//la redibujo modificado

      function getRed (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+0];
      }

      function getGreen (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+1];
      }

      function getBlue (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+2];
      }

      function setPixel(imageData, x, y, r, g, b, a){
        index = (x+y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
      }
    }

});
$('#brillo').click(function(){



    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos


      valor = 40;

      for (var x=0; x<imageData.width; x++){
        for(var y=0; y<imageData.height; y++){

          var red = getRed(imageData,x,y) + valor;
          var green = getGreen(imageData,x,y) + valor;
          var blue = getBlue(imageData,x,y) + valor;
          setPixel(imageData,x,y,red,green,blue,255);

        }
      }

      ctx.putImageData(imageData,0,0);//la redibujo modificado

      function getRed (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+0];
      }

      function getGreen (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+1];
      }

      function getBlue (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+2];
      }

      function setPixel(imageData, x, y, r, g, b, a){
        index = (x+y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
      }
    }

});
$('#binarizacion').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var w
    idth = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos

      for (var x=0; x<imageData.width; x++){
        for(var y=0; y<imageData.height; y++){

          //RGB
           var red = getRed(imageData,x,y);
           var green = getGreen(imageData,x,y);
           var blue = getBlue(imageData,x,y);

          var pixelMinimo = 155;

          if(Math.floor(0.2126*red + 0.7152*green + 0.0722*blue) > pixelMinimo){
            var colorPixel = 255;
          }else{
            var colorPixel = 0;
          };

          red = green = blue = colorPixel;

          setPixel (imageData, x,y, colorPixel,colorPixel,colorPixel,255);


        }
      }

      ctx.putImageData(imageData,0,0);//la redibujo modificado

      function getRed (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+0];
      }

      function getGreen (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+1];
      }

      function getBlue (imageData, x, y){
        index = (x + y * imageData.width) * 4;
        return imageData.data[index+2];
      }

      function setPixel(imageData, x, y, r, g, b, a){
        index = (x+y * imageData.width) * 4;
        imageData.data[index+0] = r;
        imageData.data[index+1] = g;
        imageData.data[index+2] = b;
        imageData.data[index+3] = a;
      }
    }

});
$('#saturacion').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos

      ctx.globalCompositeOperation = "saturation";
      ctx.fillStyle = "hsl(0,100%,50%)";  // saturacion al 100%
      ctx.fillRect(0,0,this.width,this.height);  //aplica
      ctx.globalCompositeOperation = "source-over";  // default (evita pisarse con otros)

            }

});
$('#tonosRojos').click(function(){

    var ctx = document.getElementById("canvas").getContext("2d");

    var width = 600;
    var height = 600;

    //  var imageData = ctx.createImageData(width, height); //almacena los pixeles en un arreglo de 1 dimension

    var image1 = new Image();
    image1.src = "drdre.jpg";

    //la imagen ejecuta la funcion una vez finalizada su carga (onLoad). Esto evita que se ejecute antes de que se suba la imagen.

    image1.onload = function(){

      ctx.drawImage(this, 0, 0); //(x,y) de la imagen //Lo dibujo

      imageData = ctx.getImageData(0,0, this.width, this.height); //(lee desde,lee hasta, pone desde, pone hasta) //le saco los datos

      ctx.globalCompositeOperation = "hue";
      ctx.fillStyle = "hsl(0,100%,50%)";  // Tonos Rojos
      ctx.fillRect(0,0,this.width,this.height);  //aplica
      ctx.globalCompositeOperation = "source-over";  // default (evita pisarse con otros)

            }

});
