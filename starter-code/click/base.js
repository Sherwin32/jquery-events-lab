console.log("Sanity Check: JS is working!");

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
	$("span").on("click", function(event){
		$("ul").append("<li>You clicked: " + $(this).text() + " at " + Date.now() + "</li>");
	})
})
