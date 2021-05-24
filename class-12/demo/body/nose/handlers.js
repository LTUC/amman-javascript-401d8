'use strict';

function fluHandler(payload) {
    console.log("Flu Handler Sneezingggg from nose :P")
}
function sugarHandler(payload) {
    console.log("sugar handler from nose not my business:D ")
}

module.exports = {
    fluHandler: fluHandler,
    sugarHandler: sugarHandler
}