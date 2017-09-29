console.log("Sanity Check: JS is working!");

var resetButton = "<button class=\"reset\">RESET</button>";

$(document).ready(function(){
	$("body").append(resetButton);
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
