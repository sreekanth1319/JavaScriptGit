function multiplication() {
    var i;
	var x=1;
    for(i = 0; i < arguments.length; i++) {
       x*=arguments[i];
    }
    return x;
} 
document.getElementById("examp").innerHTML = multiplication(2,44,5,6,7,4);