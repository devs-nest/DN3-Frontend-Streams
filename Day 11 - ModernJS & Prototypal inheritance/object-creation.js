// object literal syntax
let person = {
    firstName: "gaurav",
    lastName: "sen"
}
// using the object
let newPersonForOrg = new Object();
newPersonForOrg.firstName = "John";
newPersonForOrg.lastName = "Doe"
console.log(newPersonForOrg)

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

let firstSet = [1, 3, 5, 8, 10];
let anotherSet = [2, 6, 9, 12, 45, 30, 27];

console.log(firstSet, anotherSet);

Array.prototype.evenNumbers = function () {
    return this.filter(function (item) {
        return item % 2 === 0
    })
}
// let originalFilter = Array.prototype.filter;
// Array.prototype.filter = console.log
// Array.prototype.filter = function () {
//     return originalFilter.call(this
// }

// call by value && call by ref

let a = 2;
let b = a;

// Object.create

let org = { org: "Devsnest" };

let somePerson = Object.create(org, { firstName: { value: "Foo", enumerable: false } });

// console.log(somePerson);
// org.location = "New Delhi";
// console.log(somePerson);

// Object.hasOwn(somePerson, "name");

// // Object.assign()

// let someP = { name: "Gaurav" }

// console.log(Object.assign({}, someP, carP))
console.log(somePerson);
let carP = { car: "BMW" };
//
console.log(Object.assign({}, somePerson, carP));


// class

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }
}

let rectange = new Shape(10, 20);
console.log(rectange.area());

class Square extends Shape {
    constructor(dimension) {
        super(dimension, dimension)
    }
}

console.log(new Square(10).area())