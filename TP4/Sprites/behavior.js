

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //Flecha izquierda
        $(".bill").finish().animate({
            left: "-=50"
        });
        break;
    case 38:    //Flecha arriba
        $(".bill").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //Flecha derecha
        $(".bill").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //Flecha abajo
        $(".bill").finish().animate({
            top: "+=50"
        });
        break;
    }
});
