var x = document.createElement("p");
var y = document.createTextNode("This is new.");
x.appendChild(y);
var element = document.getElementById("div1");
element.appendChild(x);

var parent = document.getElementById("div1");
var child = document.getElementById("p3");
var p = document.createElement("p");
var n = document.createTextNode("This is super.");
p.appendChild(n);
parent.replaceChild(p,child);//ask