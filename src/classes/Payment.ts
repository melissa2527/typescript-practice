import {HasFormatter} from '../interfaces/HasFormatter.js';
// can implement the interface by incorporating it after the name

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.recipient} owes $${this.amount} for ${this.details}`
    }
}