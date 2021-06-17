
// this.table[hashedkey] = linked list DS -> adding values to it

// linked list node 
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.root = null;
    }

    add(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node; 
        } else {
            // this will add to start 
            // node.next = this.root;
            // this.root = node;
            
            // add it to the end
            const current = this.root;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    getValues () {
        let current = this.root;
        const output = [];
        while (current) {
            output.push(current.value);
            current = current.next;
        }
        return output;
    }
}


class Hashtable {
    constructor (size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        // hash the key 
        // return the hashed value
        const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
        console.log("sum : ", sum);
        return (sum * 19) % this.size;
    }

    set(key, value) {
        // 1. use hash method to hash the key
        // 2. check if I already have this key in my table
        // add it to the created linkedist 
        // if I dont have it, create a linkedlist 
        // and store it in that location with my new entry 
        const hashed = this.hash(key);
        if (!this.table[hashed]) {
            this.table[hashed] = new LinkedList();
        } 
        this.table[hashed].add({ [key] : value} ); // store anything other than the object
    }


    get(key) {
        
    }
}

const myhashtable = new Hashtable(1024); /*(2^10 = 1024) */
myhashtable.set('bucket', 'Ishaq');
myhashtable.set('melon', 'water');
myhashtable.set('lemon', 'not-water');
myhashtable.set('abzy', 'musab1');
myhashtable.set('cdxw', 'musab2');

console.log("myhashtable hashed ----> ", myhashtable.hashed)

console.log(myhashtable);

myhashtable.table.forEach(location => {
    if (location) {
        console.log("....location values--> ", location.getValues());
    }
});


// const newtable = new Hashtable(1024);
// newtable.set('melon', 'water');
// newtable.set('lemon', 'not-water');

// const index = newtable.hash('lemon');
// const v = newtable.table[index];
// console.log("v-----> ", v);