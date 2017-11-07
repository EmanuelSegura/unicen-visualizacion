//Twitter

let cb = new Codebird;

$(document).ready(function(){

    cb.setConsumerKey("Hq7798E1ZQIXKdK5hq1y6smEl","t8jXiK0998QPP2olkeVojMTFHQjXN0cxuomIzRY5EN8ynSfMYk");
    cb.setToken("925470525463330816-i2d7UrqjNO6CCoRIz3BS5cP9WBT0qTb", "cUNLC5tCQs6NthK7IdZq5OwD198yLOftc84eULf49nPhy");
    console.log( "Cargo correctamente" );
    });


    let params = {
    q: "messi",
    count:30
	};


$(".boton-cargar-tweets").on("click", function(event){
  cb.__call(
    "search_tweets",
    params,
    function (reply) {
        console.log(reply);
    }
);
});
