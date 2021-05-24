'use strict';

function brightnessHandler(payload) {
    if (payload.brightness > 75) {
        console.log('Close your eyes !!!!!!!!!');
    } else {
        console.log('Open your eyes :D :D :D ');
    }
}

function sugarHandler(payload) {
    console.log("sugar handler in eyes >>>")
}

module.exports = {
    brightnessHandler: brightnessHandler,
    sugarHandler: sugarHandler
}