'use strict';

const Node = require('./node');

class LinkedList {
    
    constructor() {
        this.head = null;
    }

    append(value) {
        let node = new Node(value);
        // if the linkedlist i empty
        if (!this.head) {
            this.head = node;
        } else {
            // if not empty 
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        return this;
    }
}

module.exports = LinkedList;


