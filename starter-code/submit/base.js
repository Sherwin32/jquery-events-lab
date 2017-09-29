console.log("Sanity Check: JS is working!");

var rick_roll_youtube_embed_code = "<iframe width='420' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>";

$(document).ready(function(){
	$("body").append('<nav id="links"></nav>');
	var linksArray = [
	"change",
	"click",
	"keypress",
	"ready",
	"submit"
	];

	linksArray.forEach(function(element){
		$("#links").append('<a style="margin: 0px 10px 0px 10px;" href="../' + element + '/index.html">' + element + '</a>');
	});
  $("#time").text( Date.now() );
  $("form").on("submit", function handleSubmit(event){
  	event.preventDefault();
  	$("body").append(rick_roll_youtube_embed_code);
  })

})
