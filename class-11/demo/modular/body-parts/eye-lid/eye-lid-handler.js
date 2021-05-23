'use strict';

function lightEyeLidHandler(payload) {
    if (payload.brightness > 75) {
        console.log(`brightness = ${payload.brightness} Close your Eyes !!`)
    } else {
        console.log(`brightness = ${payload.brightness} Open your Eyes :D :D `)
    }
}

module.exports = {
    lightEyeLidHandler: lightEyeLidHandler
}