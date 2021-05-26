'use strict';

const client = require('socket.io-client');
const socketConnection = client.connect('http://localhost:3000/family');

socketConnection.emit('get_tasks');

socketConnection.on('chore', (payload)=> {
    console.log("I have to do this task: ", payload);
    socketConnection.emit('received', payload.id);
});