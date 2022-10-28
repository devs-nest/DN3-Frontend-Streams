const longRunningFn = () => {
    console.log("longRunning fn started");
    const duration = Date.now() + 3000;
    while (Date.now() <= duration) {

    }
    console.log("longRunningFn ended");
}
const anotherFn = () => {
    console.log("another fun loaded");
    longRunningFn();
}

const someFunction = () => {
    anotherFn();
}
const handleClick = () => {
    console.log("button clicked");
}

const fnWithTimeout = () => {
    console.log("called with a timer");
    setTimeout(function timer() {
        console.log("i'm called after a delay");
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clickable").addEventListener("click", handleClick)
    fnWithTimeout();
    someFunction();
})