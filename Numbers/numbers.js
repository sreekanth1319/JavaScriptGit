function rndVal(){
	var min=parseInt(document.getElementById("minVal").value,10);
	var max=parseInt(document.getElementById("maxVal").value,10);
	var x= "";
	console.log("My X"+x);
	(function(){
		x=Math.random()*(max - min)+min;
		document.getElementById("rndout").innerHTML=x;
})();//closure
	var sky=Math.ceil(x);
	document.getElementById("topEle").innerHTML="ceil method:"+sky;
	var ground=Math.floor(x);
	document.getElementById("downEle").innerHTML="floor method:"+ground;
	
	
}