'use strict';

function lightArmsHandler(payload) {
    if (payload.brightness > 75) {
        console.log(` Arms payload.brightness = ${payload.brightness} wear sunglesses`)
    } else {
        console.log(` payload.brightness = ${payload.brightness} Take off the sungless`)
    }
}

function foodArmsHandler(payload) {
    console.log('pick up the food ...')
}

module.exports = {
    lightArmsHandler: lightArmsHandler,
    foodArmsHandler: foodArmsHandler
}