const events = require('../../events-pool');
const handlers = require('./arms-handler');

events.on('light', handlers.lightArmsHandler)
events.on('food', handlers.foodArmsHandler)