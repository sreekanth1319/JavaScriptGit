var z;
function addStr(){
	var first=document.getElementById("firstVar").value;
	var second=document.getElementById("secondVar").value;
	var z=first.concat(second);
	document.getElementById("add").innerHTML=z;
};
/*function cut(){
	console.log(z);
	var a= z.substring(3,4);
	document.getElementById("cutit").innerHTML=a;
};*/
/*function upperCase() {
    var z= document.getElementById("add").innerHTML;
    document.getElementById("upit").innerHTML = z.toUpperCase();
}*/