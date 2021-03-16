const character = 'mario';
console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

let names = ['luigi', 'mario', 'wario'];
names.push('toad');
// names.push(3) won't work due to change in types

// explicit type
let n: string;


// union type
let mixed: (string|number|boolean)[] = [];
mixed.push('three');
mixed.push(true);
mixed.push(23);
// will allow values that are strings or numbers
let uid: string|number;

let age: any = 25;

age = true;
console.log(age);
age = 'hello';
console.log(age)

let something: {name: string, age: number};
something = {name: 'melissa', age: 100};

let greet: Function;
greet = () => {
    console.log('hello there');
}
greet()

// put question mark before colon to make it optional, can still choose multiple ones
// do required parameters first then optional ones next
// you can also write c: number | string = 10 and it will have a default value that can only be overidden by arguments
const add = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}
add(5, 10, 'twenty')


