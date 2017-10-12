function Person(x, y, z) {
    this.firstName = x;
    this.lastName = y;
	this.age = z;
}
var person1= new Person("sreekanth","chundru",23);
person1.bloodgroup="o+ve";
document.getElementById("examp").innerHTML="hey "+person1.firstName+" "+"your bloodgroup is"+" "+person1.bloodgroup;

Person.prototype.nationality="Indian";
document.getElementById("examp1").innerHTML="you are "+person1.nationality;
