'use strict';

class Queue {
    constructor() {
       this.storage = []; 
    }

    enqueue(item) {
        // add to the queue to the end
        this.storage.push(item);
    }

    dequeue() {
        // remove from start
       return this.storage.shift();
    }

    peek() {
        return this.storage[0];
    }
}

module.exports = Queue;