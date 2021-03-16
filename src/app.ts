// const anchor = document.querySelector('a')!;
// // add ! if you are sure something will be there

import {Invoice} from './classes/Invoice';
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormatter";
import { ListTemplate } from './classes/ListTemplate';

// console.log(anchor.href);

// you don't have to use ! if you declare "as" with specific element type
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'start');


    // console.log(
    //     type.value,
    //     tofrom.value,
    //     details.value,
    //     amount.value
    // )
})

