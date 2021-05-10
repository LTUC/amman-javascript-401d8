'use strict';

const Node = require('../node');

describe('LL Node Class', ()=> {
    it('constructor()' , ()=> {
        let value = 'my test value';
        let node = new Node(value);
        expect(node.value).toEqual(value);
        expect(node.next).toBeNull(); 
    });
})