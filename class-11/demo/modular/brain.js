'use strict';

// Event Hub
const events = require('./events-pool');

// Require the body parts
require('./body-parts/arms/arms.js')
require('./body-parts/eye-lid/eye-lid.js')


events.emit('food');

const myInterval = setInterval(()=> {
    let brightness = Math.ceil(Math.random() * 100);
    events.emit('light', {brightness: brightness});
}, 2000)

setTimeout(()=> {
    clearInterval(myInterval);
}, 5000);
