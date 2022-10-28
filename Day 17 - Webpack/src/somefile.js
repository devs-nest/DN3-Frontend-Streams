// IFFE - immediately invoked function expression

// object revealing pattern
// let publicProps = (function () {
//     let publicVariable = 10;
//     let privateVariable = 20;

//     return {
//         value: publicVariable
//     }
// })()

// console.log(publicProps);
let publicVariable = 10;
let privateVariable = 20;
export let anotherVariable = 30;
export function usefulFunction() {
    console.log("this is a usefull func")
}

export function unusedFN() {
    console.log("unused");
}

function defaultExport() {
    console.log("this is a default export")
}

const button = document.createElement("button");
button.textContent = "Click button";
button.addEventListener("click", () => {
    console.log("button clicked");
})
document.body.appendChild(button)

export default defaultExport;