function Person(x, y, z) {
    this.firstName = x;
    this.lastName = y;
    this.age = z;
}
var person1= new Person("sreekanth","chundru",23);
var person2= new Person("Dheeraj","Sirigiri",24);
var person3= new Person("Ravi","Parvathaneni",25);

document.getElementById("examp").innerHTML=person3.firstName+" is older than "+person2.firstName+" and "+person1.firstName;
var b="";
var a;
for (a in person1){
	b += person1[a]+ " ";
}
document.getElementById("examp1").innerHTML=b;
	