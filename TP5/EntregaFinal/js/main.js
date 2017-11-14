    //Twitter

    tweets = [];

    let cb = new Codebird;

    let params = {
        q: "",
        count:30
    };

    $(document).ready(function(){

        // cb.setProxy("https://cb-proxy.herokuapp.com/");

        cb.setConsumerKey("Hq7798E1ZQIXKdK5hq1y6smEl","t8jXiK0998QPP2olkeVojMTFHQjXN0cxuomIzRY5EN8ynSfMYk");
        cb.setToken("925470525463330816-i2d7UrqjNO6CCoRIz3BS5cP9WBT0qTb", "cUNLC5tCQs6NthK7IdZq5OwD198yLOftc84eULf49nPhy");
        console.log( "Cargo correctamente" );
    });


    $(".boton-cargar-tweets").on("click", function(event){ 
        setSearch(document.getElementById('inputDeBusqueda').value);
        cb.__call("search_tweets",params,
            function (reply) {
                filterSearch(reply);
                console.log(reply);
            }
            );
    });

    function setSearch(inputSearch){
        params['q']= inputSearch;
    };

    function filterSearch(reply){

        $(".twitts-box").empty();
        // tweets = [];
        $(".hideImage").remove();
        $(".img-instruccion").css("visibility","hidden");
        $("#footer").css("margin-top",0+'%');
        $(".hideFilter").css("visibility","visible");
        $("#thumbhide").css("visibility","visible");

        for (let i=0; i< reply.statuses.length;i++){
            if(reply.statuses[i].entities.media != undefined){
                tweets.push({img: reply.statuses[i].entities.media[0].media_url_https});
                $(".twitts-box").append('<div class="co col-md-4"><a href="#" class="thumbnail"><img id="imagejson" class= "img-responsive img-rounded" src=" ' +reply.statuses[i].entities.media[0].media_url_https+ ' " alt=""></a></div>');  
            }
        }


    };

    $(".btn-anim-1").on("click", function(event){ 
        anim1();
    });


    function anim1(){
        console.log(tweets);
        let i=0;
        $(".twitts-box").empty();
        $(".twitts-box").append('<li><a class="glyphicon glyphicon-chevron-left carrousel-izq" href="#"></a></li> <div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div><li><a class="glyphicon glyphicon-chevron-right carrousel-der" href="#"></a></li>'); 

        
        $(".carrousel-izq").on("click", function(event){ 
            if(i>0){
                i--;
                $(".twitts-box").empty();
                $(".twitts-box").append('<li><a class="glyphicon glyphicon-chevron-left carrousel-izq" href="#"></a></li> <div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div><li><a class="glyphicon glyphicon-chevron-right carrousel-der" href="#"></a></li>'); 
            }
        });

        $(".carrousel-der").on("click", function(event){ 
            if(i<tweets.length){
                i++;
                $(".twitts-box").empty();
                $(".twitts-box").append('<li><a class="glyphicon glyphicon-chevron-left carrousel-izq" href="#"></a></li> <div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div><li><a class="glyphicon glyphicon-chevron-right carrousel-der" href="#"></a></li>'); 
            }
        });

    }


