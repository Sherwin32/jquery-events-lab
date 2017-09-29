console.log("Sanity Check: JS is working!");

var resetButton = "<button class=\"reset\">RESET</button>";

$(document).ready(function(){
	$("body").append(resetButton);
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
	$("input#total").on("mousedown mouseup click keyup keydown change", function doNothing(event){
		event.preventDefault();
	});
	$("input.add").on("change", function total(event){
		var left = parseInt($("input#left").val()) || 0;
		var right = parseInt($("input#right").val()) || 0;
		$("input#total").val(left+right);
	});
  $("#time").text( Date.now() );

  $(".reset").on("click", function resetHandler(event){
  	$("input").val("");
  });

})
