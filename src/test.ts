// const minus = (a: number, b: number): number => {
//     return a + b;
// }

// let result 
type StringOrNum = string | number;
type objWithName = {name: string, uid: StringOrNum};

const loginDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`)
}

const greeting = (user: objWithName) => {
    console.log(`${user.name} says hello`);
}

let hello: (a: string, b: string) => void;

hello =(name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

console.log(calc(10, 2, 'mult'));

let details: (obj: {name: string, age: number}) => void;

details = (person: {name: string, age: number}) => {
    console.log(`${person.name} is ${person.age}`)
}