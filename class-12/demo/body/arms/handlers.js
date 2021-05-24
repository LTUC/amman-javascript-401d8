'use strict';

function brightnessHandler(payload) {
    if (payload.brightness > 75) {
        console.log('Wear sunglasses');
    } else {
        console.log('Take off your sunglasses');
    }
}

module.exports = {
    brightnessHandler: brightnessHandler
}