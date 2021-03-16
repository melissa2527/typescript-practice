"use strict";
// const minus = (a: number, b: number): number => {
//     return a + b;
// }
const loginDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
let hello;
hello = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(10, 2, 'mult'));
let details;
details = (person) => {
    console.log(`${person.name} is ${person.age}`);
};
