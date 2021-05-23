'use strict';

const Events = require('events');

const myEvents = new Events(); 
// one events pool
// EXPORT ONE EVENT INSTANCE 
// singleton
module.exports = myEvents;
