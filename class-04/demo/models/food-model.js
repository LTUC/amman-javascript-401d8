'use strict';

// Schema from mongoose package;
const mongoose = require('mongoose');
const foodSchema = mongoose.Schema({
    name : {type: String, required: true},
    calories: {type: Number, required: true},
    type: {type: String, enum : ['FRUIT', 'VEG', 'PROTIEN'] }
});
// a schema is the structure of my object in this collection
// a model is a wrapper for the schema
const foodModel = mongoose.model('food', foodSchema);
module.exports = foodModel;