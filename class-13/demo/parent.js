'use strict';

const client = require('socket.io-client');
const socketConnection = client.connect('http://localhost:3000/family');

const chores = ['water the flowers :D'];

chores.forEach(chore=> {
    socketConnection.emit('new_chore', chore);
});

socketConnection.on('added', (payload)=> {
    console.log("Thank you !!")
});


// created for testing only
socketConnection.on('chore', (payload)=> {
    console.log("parent chore")
});