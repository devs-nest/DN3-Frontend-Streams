function add(firstNum) {
    return function (secondNum) {
        return firstNum + secondNum;
    }
}

let add5With = add(5);
console.log(add5With(2));
console.log(add5With(7));
console.log(add5With(12));

// callback function

// document.addEventListener("DOMContentLoaded", function () {
//     console.log("this funciton gets called back when the event occurs");
// })

function callMeOnceDone(fn) {
    console.log("i'm done");
    fn();
}

function printText() {
    console.log("hello");
}
callMeOnceDone(printText);

function printTextWithDelay(text) {
    setTimeout(function () {
        console.log(text);
    }, 3000);
}
printTextWithDelay("i'm printed with a delay")