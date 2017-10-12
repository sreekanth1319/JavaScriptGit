function Person(x, y, z) {
    this.firstName = x;
    this.lastName = y;
    this.age = z;
	this.fullName= function(){
		return document.getElementById("examp1").innerHTML="hello "+ this.firstName+" "+this.lastName;
	}
}
var person1= new Person("sreekanth","chundru",23);
delete Person.age;
document.getElementById("examp").innerHTML=Person.age;
person1.fullName();