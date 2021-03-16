// // interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: 'Melissa',
//     age: 31,
//     speak(text:string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log(`I spent ${amount}`);
//         return amount;
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }
// greetPerson(me);
// console.log(me);
import { Invoice } from "./classes/Invoice.js";
import { Payment } from './classes/Payment.js';
// need to write .js even though it is a .ts file otherwise it will not work
let docOne;
let docTwo;
docOne = new Invoice('Lulu', 'web work', 250);
docTwo = new Payment('Tommy', 'car work', 500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('Ryan', 'work on website', 100);
const invTwo = new Invoice('Tia', 'work on website', 200);
// console.log(invOne);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log('inovices', invoices);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// all classes are public by default
