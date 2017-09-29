console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("input.add").on("change", function total(event){
		var left = parseInt($("input#left").val()) || 0;
		var right = parseInt($("input#right").val()) || 0;
		$("input#total").val(left+right);
	})
  $("#time").text( Date.now() );

})
