
function add(){
	var x=document.getElementById("firstVar").value;
	x=parseInt(x);
	var y=document.getElementById("secondVar").value;
	y=parseInt(y);
	var z=x+y;
	
	document.getElementById("addOpe").innerHTML=z;
};
function sub(){
	var x=document.getElementById("firstVar").value;
	var y=document.getElementById("secondVar").value;
	var s=x-y;
	document.getElementById("subOpe").innerHTML=s;
};

function validation(){
	var x= document.getElementById("iniVal").value;
	var y=document.getElementById("nextVal").value;
	if((x==1||x==0)&&(y==0||y==1)){
		document.getElementsByClassName("valid")[0].innerHTML="Thank you for valid value";
		document.getElementsByClassName("valid")[1].innerHTML="Thank you for valid value";
	}
    else{
		document.getElementsByClassName("valid")[0].innerHTML="Please enter valid value";
		document.getElementsByClassName("valid")[1].innerHTML="Please enter valid value";
	}
};
function logAdd(){
	var x= document.getElementById("iniVal").value;
	var y=document.getElementById("nextVal").value;
	  if ( x == 1 && y== 1){
		document.getElementById("finalAnd").innerHTML = "1";
	  }else{
		document.getElementById("finalAnd").innerHTML = "0";
	  }
};