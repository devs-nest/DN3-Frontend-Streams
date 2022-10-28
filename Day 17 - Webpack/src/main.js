// import  { publicVariable } from "./somefile.js"
// console.log(publicVariable);

// import defaultExport from "./somefile.js";
import { usefulFunction } from "./somefile.js";
import { usefulFunction as usefullFromAnother } from "./anotherfile.js";

// import * as everything from "./somefile.js";
import join from "lodash/join";
import "./style.scss";

console.log(everything);

usefulFunction();
usefullFromAnother()

const element = document.createElement("article");

element.textContent = join(["Hello", "Webpack"], " ");
element.classList.add("blue");
document.body.appendChild(element)
