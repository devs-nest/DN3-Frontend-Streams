// object literal syntax
let person = {
    firstName: "gaurav",
    lastName: "sen"
}
// using the object
let anotherPerson = new Object();
anotherPerson.firstName = "John";
anotherPerson.lastName = "Doe"
console.log(anotherPerson)

// function constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let jane = new Person("Jane", "Doe");
console.log(jane)

let gaurav = new Person("Gaurav", "Sen");
console.log(gaurav)

Person.prototype.printName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(gaurav.firstName.toString());
console.log(jane.printName());

// prototypal inheritance in JS