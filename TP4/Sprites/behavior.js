$(document).keydown(function(e){
    switch (e.which){
    case 37:    //Flecha izquierda
        $(".background1").finish().animate({
            left: "-=2"
        });
        break;

    case 39:    //Flecha derecha
        $(".background1").finish().animate({
          left: "+=2"

        });
        break;

    }
});

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //Flecha izquierda
        $(".bill").css("animation","caminar 0.9s steps(4) infinite");
        break;

    case 39:    //Flecha izquierda
        $(".bill").css("animation","caminar 0.9s steps(4) infinite");
        break;
}
});
