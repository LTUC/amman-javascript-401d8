'use strict';

const Events = require('events');
const myEvents = new Events();

// myEvents.emit(... ) // sending/firing/emit an event

// myEvents.on('name of event') 


// setInterval(()=> {

// }, 2000);


function armLightHandler(payload) {
    console.log("payload: ", payload)
    if (payload.brightness > 75) {
        console.log('DANGER :::: wear sunglasses')
    } else {
        console.log('take off your sunglasses it\'s safe')
    }
}

function eyeLidHandler(payload) {
    console.log("payload: ", payload)
    if (payload.brightness > 75) {
        console.log('DANGER :::: close')
    } else {
        console.log('stay open')
    }
}

myEvents.on('asac-light', armLightHandler);
myEvents.on('asac-light', eyeLidHandler);

myEvents.emit('asac-light', {brightness: 75});
