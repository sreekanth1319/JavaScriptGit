function myFunction(fValue,sValue){
	var finalVal="Sum of ";
	function add(){
	return finalVal+fValue+" & "+sValue+" is "+(fValue+sValue);
	}
	return add();
}
function dummy(){
var x=myFunction(20,30);
document.getElementById("examp").innerHTML=x;
}

/*inner function will have acceses to variables and parameters of its parent function.*/
		
