var person={
   firstName :"sreekanth",
   lastName :"chundru",
	age :23,
	fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1={
	firstName:"dheeraj",
	lastName:"sirigiri",
	age:24
}
var person2={
	firstName:"ramesh",
	lastName:"putta",
	age:25
}
var person3={
	firstName:"ravi",
	lastName:"parvathaneni",
	age:26
}

document.getElementById("examp").innerHTML=person.fullName.apply(person1,[person2,person3]);//ask