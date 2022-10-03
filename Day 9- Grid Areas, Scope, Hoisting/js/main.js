// execution context
// 1 global object
// 2 this
// 3 reference to outer environment


// hoisting

const somevariable = "devsnest"; //declaration
console.log(somevariable);
someFunction();
function someFunction() {
    console.log("from somefunction", somevariable);
}
console.log(somevariable)

// console.log(somevariable);

//  execution context created
// 2 phases
// creation phase
// loads variables and func in memory

// execution phase
// execute the statements line by line

// var myName = "gaurav";
// function printName() {

//     console.log(myName);
//     printAnotherName();
// }

// function printAnotherName() {
//     // var myName = "JOhn";
//     console.log(myName);
//     //nested function
//     function printSomeOtherName() {

//         console.log(myName);
//     }
//     printSomeOtherName();
// }


// console.log(myName);
// printName();