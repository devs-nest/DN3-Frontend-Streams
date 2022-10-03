let secondNumber = 5;
let firstNumber = 10;
// if (num2 > num1) {
//     console.log(num2 + " is greater than " + num1);
// } else if (num2 < num1) {
//     console.log(num2 + " is less than " + num1);
// } else {
//     console.log("Both the numbers are equal");
//     console.log("this is another statement");
// }
// num1 = 10;
// num2 = 5;
// if (num2 > num1) {
//     console.log(num2 + " is greater than " + num1);
// } else if (num2 < num1) {
//     console.log(num2 + " is less than " + num1);
// } else {
//     console.log("Both the numbers are equal");
//     console.log("this is another statement");
// }

function compareNumbers(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        console.log(firstNumber + " is greater than " + secondNumber);
    } else if (firstNumber < secondNumber) {
        console.log(firstNumber + " is less than " + secondNumber);
    } else {
        console.log("Both the numbers are equal");
    }
}

compareNumbers(5, 10) // calling our function
compareNumbers(10, 5)
compareNumbers(10, 10)

function print() {
    console.log("this is printed in the console")
}

print();

// function expression syntax

const add = function addNumber(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

const result = add(5, 7);
console.log(result)

// anonymous functions

const subtractTwoNumbers = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

// invoking
console.log(subtractTwoNumbers(3, 5))

const person = {
    firstName: "John",
    lastName: "Doe",
    print: function () {
        console.log("this function is a property of an object")
    }
};

person.print();

// coding conventions in js

// camelCase 
//  