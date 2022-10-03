
let setOfNumbers = new Set();

setOfNumbers.add(2);
setOfNumbers.add(5);
setOfNumbers.add(7);
console.log(setOfNumbers);
console.log(setOfNumbers.has(3))
setOfNumbers.delete(7)
console.log(setOfNumbers);
// setOfNumbers.clear();

let listofNumbers = [2, 2, 3, 4, 5, 5, 6, 7];
console.log();
let newSet = new Set(listofNumbers);
for (let item of newSet) {
    console.log(item);
}

// maps
// key value pair

// let map = new Map();
// map.set("1", "one");

// find the occurrence of each letter in a sentence

let map = new Map();
let sentence = "This is a sentence";
for (let letter of sentence.split("")) {
    let caseInsensitiveLetter = letter.toLowerCase();
    if (map.has(caseInsensitiveLetter)) {
        // add the count by 1
        let count = map.get(caseInsensitiveLetter);
        map.set(caseInsensitiveLetter, count + 1);

    } else {
        map.set(caseInsensitiveLetter, 1);
    }
}

console.log(map);
//

console.log(Array.from(map, ([key, value]) => ({ key, value })));
console.log(Array.from(newSet, item => item));

const arr = [6, 2, 8, 4, 10];


console.log("some ", arr.some(item => item % 2 == 0));
console.log("every ", arr.every(item => item % 2 == 0));

//map which converts one type of array to another type it
// returns it as new array

let kvArray = Array.from(map, ([key, value]) => ({ key, value }));

console.log(kvArray);
console.log(kvArray.map(currentItem => currentItem.value))

console.log(kvArray);

// Array.filter modify it's default behaviour using the prototype

let originalFilterFn = Array.prototype.filter;



Array.prototype.filter = function (cb) {
    //this  refrence to the array on which filter is being applied
    return originalFilterFn.call(this, (item) => {
        console.log(item)
        return cb(item);
    });
}

console.log([1, 3, 6, 8].filter(item => item % 2 == 0));

//

let org = { org: "Devsnest" };


let newObj = {};
Object.defineProperties(newObj, {
    age: {
        value: 42,
        // enumerable: true,
        writable: false
    }
})


let somePerson = Object.create(org, { firstName: { value: "Foo", enumerable: true } });

let mergedObject = Object.assign({}, somePerson, { car: "BMW" });
console.log(mergedObject);
