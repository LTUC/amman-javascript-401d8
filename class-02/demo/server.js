'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const logger = require('./middlewares/logger.js');

// Global Middleware
app.use(logger);
app.use(express.json());

app.get('/item/:type', square('not a number'), (req, res)=> {
   console.log(" i am inside of the /item/:type route ")
    console.log(req.custom_msg)
   console.log(req.params); // {type: value};
    res.json({
        type: req.params.type
    });
});

app.get('/item', square(10) , (req, res)=> {
    console.log(req.custom_msg)
    console.log('1:', req.params);
    console.log("req.number after middleware---> ", req.number);
    res.json({
        result : req.number
    });
});

app.get('/item/:type/:quantity', square(5) , (req, res)=> {
    console.log(req.custom_msg);
    console.log(req.params); // {type: value, quantity: number};
    console.log("req.number>>> ", req.number);
    res.json({
        type: req.params.type,
        quantity: req.params.quantity,
        result: req.number
    });
});

app.post('/item', (req, res)=> {
    console.log(req.body);
    res.json(req.body);
})



function square(number) {
    return (req, res, next) => {
        if (typeof number == 'number') {
            req.number = number * number;
            console.log("req.number >>> ", req.number)
            next();
        } else {
            next('not a number!');
        }
    }
}


function listen(port) {
    app.listen(port, ()=>console.log(`Hello from ${port}`) )
}


app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
    app,
    listen
}