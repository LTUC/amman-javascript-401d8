'use strict';

const port = process.env.PORT || 3000;
// main connection : localhost:3000/

const io = require('socket.io')(port);
// namespace or segment /health-system : immune system/ heart ..
// /digestive-sytem : stomach / guts 
const healthSystem = io.of('/health-system'); // namespace
// connection : is an event that will be fired
// when a client connects to the brain server

// namespace localhost:3000/health-system


io.on('connection', (socket)=> {
    // console.log(socket);
    console.log('A CLIENT GOT CONNECTED TO HOME : socket.id', socket.id);
    // do whatever ... fire an event .. 

    socket.on('sun-light', (payload)=> {
        // broadcast
        io.emit('brightness', payload);
    });
    
});


// when someone connects to http://localhost:3000/health-system
healthSystem.on('connection', (socket)=> {
    console.log('A CLIENT GOT CONNECTED TO healthSystem : socket.id', socket.id);
    socket.on('sugar', (payload)=> {
        healthSystem.emit('high-sugar', payload);
    });

    socket.on('cold', (payload)=> {
        healthSystem.emit('flu-warning', payload);
    });

})

