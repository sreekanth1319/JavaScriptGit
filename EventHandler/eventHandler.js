var x=document.getElementById("clicked");
x.addEventListener("click",myFunction());
x.addEventListener("mouseout",mouse());
function myFunction() {
    document.getElementById("examp").innerHTML = "clicked";
}
function mouse(){
	document.getElementById("examp1").innerHTML = "mouse realse";
}
	//checkonce