    //Twitter

    tweets = [];

    let anim = "scale";

    let cb = new Codebird;

    let params = {
        q: "",
        count:40,
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

                tweets=[];
                for (let i=0; i< reply.statuses.length;i++){
                    if(reply.statuses[i].entities.media != undefined){
                        tweets.push({img: reply.statuses[i].entities.media[0].media_url_https, like:reply.statuses[i].favorite_count});
                    }
                }

                filterSearch(tweets);
                console.log(reply);
                console.log(tweets);
            }
            );

    });

    function setSearch(inputSearch){
        params['q']= inputSearch;
    };

    function filterSearch(reply){
        

       
        $(".twitts-box").empty();
        $(".hideImage").remove();
        $(".img-instruccion").css("visibility","hidden");
        $("#footer").css("margin-top",0+'%');
        $(".hideFilter").css("visibility","visible");
        $("#thumbhide").css("visibility","visible");

        for (let i=0; i< reply.length;i++){
            
            
            $(".twitts-box").append('<div class="co col-md-4"><a href="#" class="thumbnail"><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div> <div>'+tweets[i].like+'</div>');  
            $("#imagejson").addClass("imagerot");
        }

    };

    let i = 0;   

     $(".galery").on("click", function(e){
        filterSearch(tweets,anim);
       clearInterval(tiempo);
    });
    $(".carrousel1").on("click", function(e){

        carrousel();
    });

    function carrousel(){
      console.log(tweets);
      $(".twitts-box").empty();
      $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div>');
        setIntervaloCarrousel();
    }


  // $(document).on("click",".twitts-box",function(e){
  //     $(".carrousel-izq").on("click",function(){
  //       correIzq();

  //   });
  //     $(".carrousel-der").on("click",function(){
  //       correDer()
  //   });



  // });

  function correDer(){
    console.log("der");
    if(i<tweets.length-1){
        i++;
        $(".twitts-box").empty();
        $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div>');
    }else{
        i=0;
        $(".twitts-box").empty();
        $(".twitts-box").append('<div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div>');

    }
};

//Carrousel - intervalo

let tiempo;

function setIntervaloCarrousel() {
    tiempo = setInterval(correDer, 2000);
};


// function correIzq(){
//     console.log("izq");
//     if(i>0){
//       i--;
//       $(".twitts-box").empty();
//       $(".twitts-box").append('<li><a class="glyphicon glyphicon-chevron-left carrousel-izq btn-izq co col-md-6" href="#"></a></li> <div class="co col-md-8 col-md-offset-2"><a href="#" class=""><img id="imagejson" class= "img-responsive img-rounded" src=" '+tweets[i].img+' " alt=""></a></div><li><a class="glyphicon glyphicon-chevron-right carrousel-der btn-der" href="#"></a></li>');
//   }
// }

// Animaciones

$(".btn-scale-anim1").on("click", function(event){ 
     $("#imagejson").removeClass("imagesca imagerot imagetran");
     $("#imagejson").addClass("imagesca");

     // anim="scale";
     filterSearch(tweets);
});

$(".btn-translate-anim2").on("click", function(event){ 


     $("#imagejson").removeClass("imagesca imagerot imagetran");
     $("#imagejson").addClass("imagetran");
    
    filterSearch(tweets);
});

$(".btn-rotation-anim3").on("click", function(event){ 
     
     $("#imagejson").removeClass("imagesca imagerot imagetran");
     $("#imagejson").addClass("imagerot");
    
    filterSearch(tweets);

});








