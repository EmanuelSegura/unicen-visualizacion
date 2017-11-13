    //Twitter

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
}

function filterSearch(reply){
    tweets = [];

    for (let i=0; i< reply.statuses.length;i++){
        if(reply.statuses[i].entities.media != undefined){
            // $("#imagejson").attr("src",reply.statuses[i].entities.media[0].media_url_https);
        tweets.push({img: reply.statuses[i].entities.media[0].media_url_https});
        $("#thumbhide").css("visibility","visible");
        $(".twitts-box").append('<div class="co col-md-4 "><a href="#" class="thumbnail"><img id="imagejson" class= "img-responsive img-rounded" src=" ' +reply.statuses[i].entities.media[0].media_url_https+ ' " alt=""></a></div>');
   
    }
}
}
