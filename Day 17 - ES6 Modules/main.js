// import  { publicVariable } from "./somefile.js"
// console.log(publicVariable);

// import defaultExport from "./somefile.js";
// import { usefulFunction, anotherVariable } from "./somefile.js";
import { usefulFunction as usefullFromAnother } from "./anotherfile.js";

import * as everything from "./somefile.js";

console.log(everything);
everything.default();
everything.usefulFunction();
usefullFromAnother()
console.log({ another: everything.anotherVariable });