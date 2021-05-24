'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/';
const handlers = require('./handlers');

const brainConnection = io.connect(host);

brainConnection.on('brightness', handlers.brightnessHandler );
brainConnection.on('high-sugar', handlers.sugarHandler);