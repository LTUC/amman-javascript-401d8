const dynamoose = require('dynamoose');

const foodSchema = new dynamoose.Schema({
    id: String,
    name: String,
    calories: Number
});

module.exports = dynamoose.model('food', foodSchema);