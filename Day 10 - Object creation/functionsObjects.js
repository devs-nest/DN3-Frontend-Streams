function printText() {
    console.log("hello");
}

printText.areYouAnObject = true;

var a = 2;

let person = {
    firstName: "Gaurav",
    lastName: "Sen",
    getName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(this.a);
console.log(person.getName());

function greetPerson(greeting, another) {
    console.log(greeting, this.getName());
}

// greetPerson();

// bind
// creates a new copy of the function that we calling bind on
// let greetGaurav = greetPerson.bind(person);
// console.log(greetGaurav());

// call 

// doesn't create a copy

greetPerson.call(person, "Namaste", "another");




// arguments

function sum() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        total += arguments[index];
    }
    return total;
}
console.log(sum(2, 3, 4, 5, 1, 5))

// apply

greetPerson.apply(person, ["Hello", "another"]);

// function borrowing

let doctor = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.getName.call(doctor))

// function currying

function logData(date, data) {
    console.log(date, data);
}

logData(new Date(), "this is data to be logged")

let logNow = logData.bind(null, new Date());
logNow("this is another info to be logged")
logNow("some other data")


// 

// function add(firstNum) {
//     return function (secondNum) {
//         console.log(firstNum + secondNum)
//         return firstNum + secondNum;
//     }
// }

// add(5)(2);
// add(5)(7);
// add(6)(9);


function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

let add5With = add.bind(null, 5);
console.log(add5With(2))
console.log(add5With(3));

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

let doubleTheNumber = multiply.bind(null, 2);
console.log(doubleTheNumber(2))
console.log(doubleTheNumber(3));

// default values for params

function printSomeText(text = "devsnest") {
    console.log(text);
}

printSomeText();

printSomeText("mentor");