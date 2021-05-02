'use strict';

require('dotenv').config();
const PORT = process.env.PORT || 4000;
const server = require('./server.js');

server.start(PORT);

// console.log(server.app);