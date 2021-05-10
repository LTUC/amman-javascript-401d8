'use strict';

const LL = require('../ll');

describe('Linked List', ()=> {
    it('constructor()', ()=> {
        let list = new LL();
        expect(list.head).toBeNull();
    });

    it('append()', ()=> {
        const list = new LL();
        const firstValue = 'Fist Value';
        list.append(firstValue);
        expect(list.head.value).toEqual(firstValue);
        
        const secondValue =  'Second Value';
        list.append(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

        const thirdValue =  'Third Value';
        list.append(thirdValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
})