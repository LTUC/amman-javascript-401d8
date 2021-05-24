'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/health-system';

const handlers = require('./handlers');

const healthConnection = io.connect(host);

healthConnection.on('flu-warning', handlers.fluHandler);
healthConnection.on('high-sugar', handlers.sugarHandler);