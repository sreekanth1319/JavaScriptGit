var z;
function addStr(){
	var first=document.getElementById("firstVar").value;
	var second=document.getElementById("secondVar").value;
	z=first.concat(second);
	document.getElementById("add").innerHTML=z;
};
function cut(){
	console.log(z);
	var a= z.substring(3,4);
	document.getElementById("cutit").innerHTML=a;
};
function up() {
    z= document.getElementById("add").innerHTML;
	console.log(z);
    document.getElementById("upit").innerHTML = z.toUpperCase();
}