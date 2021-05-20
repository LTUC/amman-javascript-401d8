'use strict';

class Stack {
    constructor() {
        this.top = null;
        this.storage = []; // new Array()
    }

    peek() {
        return this.top;
    }

    push(item) {
        this.storage.unshift(item);
        this.top = item;
    }

    pop() {
        let item = this.storage.shift();
        this.top = this.storage[0] || null;
        console.log("POP this.top ---> ", this.top)
        return item;
    }

}

module.exports = Stack;