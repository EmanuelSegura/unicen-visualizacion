    //Twitter

    tweets = [];

    let anim = "imagesca";
    let cb = new Codebird;

    let params = {
        q: "",
        count:40,
    };

    $(document).ready(function(){
        cb.setConsumerKey("Hq7798E1ZQIXKdK5hq1y6smEl","t8jXiK0998QPP2olkeVojMTFHQjXN0cxuomIzRY5EN8ynSfMYk");
        cb.setToken("925470525463330816-i2d7UrqjNO6CCoRIz3BS5cP9WBT0qTb", "cUNLC5tCQs6NthK7IdZq5OwD198yLOftc84eULf49nPhy");
        console.log( "Cargo correctamente" );


    });


    $(".boton-cargar-tweets").on("click", function(event){
        setSearch(document.getElementById('inputDeBusqueda').value);

        cb.__call("search_tweets",params,

            function (reply) {

                tweets=[];
                for (let i=0; i< reply.statuses.length;i++){
                    if(reply.statuses[i].entities.media != undefined){
                        tweets.push({img: reply.statuses[i].entities.media[0].media_url_https, like:reply.statuses[i].favorite_count});
                    }
                }

                filterSearch(tweets,anim);
                console.log(reply);
                console.log(tweets);
            }
            );

    });

    function setSearch(inputSearch){
        params['q']= inputSearch;
    };

    function filterSearch(reply,anim){
        $(".twitts-box").empty();
        $(".hideImage").remove();
        $(".img-instruccion").css("visibility","hidden");
        $("#footer").css("margin-top",0+'%');
        $(".hideFilter").css("visibility","visible");
        $("#thumbhide").css("visibility","visible");

        for (let i=0; i< reply.length;i++){


            $(".twitts-box").append('<div class="co col-md-4"><a href="#" class="thumbnail"><img id="imagejson" class="img-responsive img-rounded '+anim+'" src=" '+tweets[i].img+' " alt=""></a></div>');

        }


    };

    $(".btn-scale-anim1").on("click", function(event){
      clearInterval(tiempo);
         anim="imagesca";
          removeClass();
          filterSearch(tweets,anim);
        });

    $(".btn-translate-anim2").on("click", function(event){
      clearInterval(tiempo);
          anim="imagerot";
           removeClass();
           filterSearch(tweets,anim);
    });

    $(".btn-rotation-anim3").on("click", function(event){

      clearInterval(tiempo);
        anim="imagetran";
        removeClass();
        filterSearch(tweets,anim);
      });

    function removeClass(){
      $("#imagejson").removeClass("imagesca imagerot imagetran");
    }


    let i = 0;

     $(".galery").on("click", function(e){
        filterSearch(tweets,anim);
       clearInterval(tiempo);
    });


    $(".carrousel1").on("click", function(e){
      clearInterval(tiempo);
        carrousel();
    });

    function carrousel(){
      console.log(tweets);
      i=0;
      $(".twitts-box").empty();
      $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded '+anim+'" src=" '+tweets[i].img+' " alt=""></a></div>');
        setIntervaloCarrousel();
    }


  function correDer(){
    console.log("der");
    if(i<tweets.length-1){
        i++;
        $(".twitts-box").empty();
        $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded '+anim+'" src=" '+tweets[i].img+' " alt=""></a></div>');
    }else{
        i=0;
        $(".twitts-box").empty();
        $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded '+anim+'" src=" '+tweets[i].img+' " alt=""></a></div>');

    }
};



let tiempo;

function setIntervaloCarrousel() {
    tiempo = setInterval(correDer, 2000);
};
