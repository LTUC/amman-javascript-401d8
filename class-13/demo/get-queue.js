'use strict';

const client = require('socket.io-client');
const socketConnection = client.connect('http://localhost:3000/family');

socketConnection.emit('get_queue');
