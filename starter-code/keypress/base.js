console.log("Sanity Check: JS is working!");

$(document).ready(function(){

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
				var ansArray = Math.round((second - first)/10).toString().split("");
				while(ansArray.length < 4){
					ansArray.splice(0,0,"0");
				}
				// console.log(ansArray);
				$("#total-time").text(ansArray[0]+ansArray[1]+":"+ansArray[2]+ansArray[3]);
				flag = "first";
			}
		}
	})
})
