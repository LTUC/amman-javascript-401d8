'use strict';

const io = require('socket.io-client');
const handlers = require('./handlers');
// I want to connect to this host
const host = 'http://localhost:3000';
// const host = 'https://myapp.heroku.com';

const brainConnection = io.connect(host);
brainConnection.on('brightness', handlers.brightnessHandler);
