'use strict';

const uuid = require('uuid').v4;
const io = require('socket.io')(3000);
// a keyed queue.
// there will be no order preserved 
// messages get delivered and removed from here 
// once they are recieved 
// Message Queue -> Tasks Queue
const queue = {
    chores: {},
    bills: {}
}
const family = io.of('/family'); // namespace

family.on('connection', socket=> {

    // custom event that I will create
    socket.on('new_chore', payload=> {
        // add it to the queue
        console.log("adding a new task to the queue ..")
        let id = uuid(); // create an id for my task
        queue.chores[id] = payload;
        socket.emit('added');//telling the parent that I added its task
        family.emit('chore', {id: id, data: payload});
    });
    // custom event that I will create
    socket.on('received', payload=> {
        // delete it from the queue
        // payload is the id passed from child
        console.log("in hub: child received the task", payload)
        delete queue.chores[payload];
    });

    socket.on('get_tasks', ()=> {
        Object.keys(queue.chores).forEach(id=> {
            socket.emit('chore', {id, data: queue.chores[id] });
        });
    });

    socket.on('get_queue', ()=> {
        console.log("get_queue: ")
        console.log(queue.chores);
    });
    
});

