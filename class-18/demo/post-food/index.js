const uuid = require('uuid').v4;
const Food = require('./food-schema')

exports.handler = async (event) => {
    // code goes here
    try {
        const id = uuid();
        const {name, calories} = JSON.parse(event.body);
        let record = new Food({id, name, calories});
        let newRecord = await record.save();
        return {
            statusCode: 201,
            body: JSON.stringify(newRecord)
        }
    } catch(err) {
        return {
            statusCode: 500,
            err: err.message
        }
    }
    
}
