$(document).ready(function(){

	var host = "http://192.168.43.132/apimmt/";
	$(".contenido").hide();
	mostar_imagen();

	function mostar_imagen()
	{
		$.ajax({
			type:'GET',
			url: host+"random"
			
		}).success(function(data){
			

			if (data.status == "success") 
			{
				console.log(data.content);
				$("#imagen").attr('src', "http://"+data.content.url);
			}
			else
			{
				console.log("asd");	
			}
			
		}).error(function(data){

			console.log(data);

		});	
	}

	setTimeout(function(){ $(".imagen_temporal").fadeOut(200);$(".contenido").fadeIn(200); }, 5000);




});