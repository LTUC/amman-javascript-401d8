'use strict';

const Queue = require('../queue');

describe('Queue', ()=> {
    it('implements the FIFO functionality', ()=> {
        let q = new Queue();
        q.enqueue(1)
        q.enqueue(2)
        q.enqueue(3)
        // 1    2    3   4   5
        let item = q.dequeue();
        expect(item).toEqual(1);
        expect(q.dequeue()).toEqual(2);
        expect(q.dequeue()).toEqual(3);


    });
})