
function addArray(){
	var init_Array=document.getElementById("firstVar").value;
	var x= init_Array.split(",");
	var second_Array=document.getElementById("secondVar").value;
	var y= second_Array.split(",");
	var z=x.concat(y);
	document.getElementById("add").innerHTML=z;
};
function lastEle(){
	var init_Array=document.getElementById("firstVar").value;
	var x= init_Array.split(",");
	var second_Array=document.getElementById("secondVar").value;
	var y= second_Array.split(",");
	var z=x.concat(y);
	 var popOut=z.pop();
	document.getElementById("poping").innerHTML="POP OPeration:"+popOut;
};
function splicing(){
	var init_Array=document.getElementById("firstVar").value;
	var x= init_Array.split(",");
	var second_Array=document.getElementById("secondVar").value;
	var y= second_Array.split(",");
	var z=x.concat(y);
	console.log(z);
	z.splice(2,0,5,8);
	document.getElementById("spliceArray").innerHTML="Splice OPeration:"+z;
};
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	