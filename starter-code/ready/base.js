/*
  What needs to change so that the page says "Go!"?
*/

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
  $("h1").text("Go!");
  console.log( "The page says:", $("h1").text() );
});

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
