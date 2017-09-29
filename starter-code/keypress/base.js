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

	$("body").append('<nav></nav>');

	var flag = "first";
	var first = 0;
	var second = 0;

	$("body").on("keydown", function(event){

		if(event.keyCode == 32){
			if(flag == "first"){
				first = Date.now();
				flag = "second";
			}else if(flag == "second"){
				second = Date.now();
				var ansArray = (second - first).toString().split("");
				ansArray.splice(-3, 0, ".");
				console.log(ansArray);
				if(ansArray[0]==="."){
					$("#total-time").text("0"+ansArray.join("")+" seconds");
				}else{
					$("#total-time").text(ansArray.join("")+" seconds");
				}
				
				flag = "first";
			}
		}
	})
})
