//Twitter
let infoSesion = {
  
};


$(document).ready(function() {
    console.log( "ready!" );

});

$("boton-cargar-tweets").on("click", function(event)
{
  $.ajax({
    url:"https://api.twitter.com/1.1/search/tweets.json?q=%23tandil",
    method:"GET",
    dataType:"JSON",
    success: function(data){
      $("#twitter").html(data);
    },
    error: function(){
      $("#twitter").html("<h1>Error - Intente de nuevo mas tarde</h1>");
    }
  });
  $("#twitter").html("<h1>Cargando Tweets...</h1>");
  event.preventDefault();
});

function initializeTwitter(){
	 $.ajax({
    url:"https://api.twitter.com/oauth/Hq7798E1ZQIXKdK5hq1y6smEl",
    method:"POST",
    dataType:"JSON",
    success: function(data){
      $("#twitter").html(data);
    },
    error: function(){
      $("#twitter").html("<h1>Error - No se pudo iniciar sesion</h1>");
    }
  });
  $("#twitter").html("<h1>Iniciando sesion...</h1>");
  event.preventDefault();
}



function initializeGoogle(){
	var latlng = new google.maps.LatLng(-37.328611, -59.136944);

	var mapOptions = {
		zoom: 8,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}

	var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
};

google.maps.event.addDomListener(window,'load',initializeGoogle);



