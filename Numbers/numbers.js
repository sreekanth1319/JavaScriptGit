function rndVal(){
	var min=document.getElementById("minVal").value;
	var max=document.getElementById("maxVal").value;
	(function randomVal(min,max){
		console.log(min);
		var x=Math.random() * (max - min) + min;
		document.getElementById("rndout").innerHTML=x;
})();
}//ask