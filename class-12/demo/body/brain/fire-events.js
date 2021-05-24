'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000';
const brainConnection = io.connect(host);
const healthConnection = io.connect(`${host}/health-system`);

brainConnection.emit('sun-light', {brightness: 80});

healthConnection.emit('sugar', {level: 150});
healthConnection.emit('cold', {temp: -5});
