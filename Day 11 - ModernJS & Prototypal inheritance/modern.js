// es6 es2015

// template literal syntax

// const firstName = "John";
// const age = 28;

// console.log("Hi my name is " + "\"" + name + " and my age is " + age);
// console.log(`Hi my name is "${firstName}" and my age is ${age > 30 ? "greater than 30" : "less than 30"}`);

// shorthand property
// let printMe = function () {
//     console.log(this.firstName, this.age)
// };

// console.log(person);

// destructuring

let anotherPerson = {
    firstName: "foo", lastName: "bar",
    address: {
        city: "Pune",
        sate: "MH"
    }
}

let { firstName, address: { city } } = anotherPerson;
console.log(firstName, city);

// destructure arrays

const fruits = ["Apple", "Kiwi", "Organge"]
console.log(fruits[0])

const [orange, b, a] = fruits;
console.log(`coming from destru array ${orange}`);
// alias

let { firstName: givenname } = anotherPerson;
console.log("aliased as name", givenname);

// rest operator - ... => ellipsis notation


const { firstName: name, ...rest } = anotherPerson;
console.log(name, rest);
const [apple, ...rem] = fruits;
console.log(apple, rem);

const anotherListOfFruits = ["Strawberry", "Pineapple"];

const moreFruits = [...fruits, ...anotherListOfFruits];
console.log(moreFruits);

console.log({ ...anotherPerson.address, country: "India" });

// arrow functions

let sum = function (firstNum, secondNum) {
    console.log(arguments);
    return firstNum + secondNum;
}

let sumA = (firstNum, secondNum, ...others) => {
    console.log(others);
    return firstNum + secondNum;
}

console.log(sumA(1, 2, 3, 4));

let sumArrow = (firstNum, secondNum) => {
    let result;
    if (firstNum > secondNum) {

        result = firstNum + secondNum;
    } else {
        result = 0;
    }
    return result;
}

// optional chaining ?.

let person = {
    firstName: "J", lastName: "D", age: 0
};

if (person?.address?.city) {
    console.log(anotherPerson.address.city);
}

// nullish coalescing operator

let age = person.age ?? 20;
console.log(age);


