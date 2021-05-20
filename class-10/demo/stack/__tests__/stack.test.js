'use strict';
const Stack = require('../stack');

describe('Stack', ()=> {

    it('creates a stack', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
    });

    it('peek()', ()=> {
        let stack = new Stack();
        expect(stack.peek()).toBeNull();
    });

    it('peek() returns last item', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
    });

    it('push() to the top', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.storage[0]).toEqual(1);
        expect(stack.top).toEqual(1);
    });

    it('pop() removes last item', ()=> {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        let item = stack.pop();
        expect(item).toEqual(2);
        expect(stack.peek()).toEqual(1);
        item = stack.pop();
        expect(item).toEqual(1);
        expect(stack.peek()).toBeNull();
    });
})
