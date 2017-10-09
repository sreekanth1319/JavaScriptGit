function mulTable(){
var table= document.getElementById("iniVal").value;
var x="";

for (var i = 1; i <10; i++) {
	x+="<tr><td>" + table + " x " + i + " = " + table*i + "</td></tr></br>";
	document.getElementById("multiplication").innerHTML=x;
}
};
function leap(){
	var year=document.getElementById("iniVal").value;
	if(year%4==0){
		document.getElementById("findLeap").innerHTML=year +"is a leap year";
	}
	else{
		document.getElementById("findLeap").innerHTML=year+"is not a leap year";
	}
};
function table_while(){
	var num=document.getElementById("iniVal").value;
	var x="";
	var i=1;
	while (i<10){
		x+="<tr><td>" + num + " x " + i + " = " + num*i + "</td></tr></br>";
		i++;
		document.getElementById("mulWhile").innerHTML=x;
	}
};
		
	
	
		