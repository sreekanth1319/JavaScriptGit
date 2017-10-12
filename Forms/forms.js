function myFunction(){
	var x=document.forms["myForm"]["firstN"].value;
	console.log(x);
	if(x==""){
		alert("give the valid name");
		return false;
	}
    if (document.getElementById("age").checkValidity() == false) {//
        document.getElementById("age1").innerHTML = document.getElementById("age").validationMessage;//
    } else {
        document.getElementById("age1").innerHTML = "Input OK";//
    } 
}