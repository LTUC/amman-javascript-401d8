'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const logger = require('./middlewares/logger.js');

const thingRouter = require('./routes/thing.js');

// Global Middleware
app.use(logger);
app.use(express.json());

// attaching our routes module to the app obj
app.use(thingRouter);

function listen(port) {
    app.listen(port, ()=>console.log(`Hello from ${port}`) )
}


app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    app,
    listen
}