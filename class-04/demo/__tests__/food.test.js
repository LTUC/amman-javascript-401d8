// require code fellows supergoose.

require('@code-fellows/supergoose');
// const mongoose = require('mongoose');
// const MONGODB_URI = 'mongodb://localhost:27017/401d8-demo';
// mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
// });

const Collection = require('../models/model-collection');
const foodModel = require('../models/food-model');
const food = new Collection(foodModel);

// write our tests
describe('Food Model', ()=> {
    it('can create() a new food item', async ()=> {
        let obj = {name: 'test food1', calories: 99, type: 'FRUIT'};
        let newItem = await food.create(obj);
        console.log("newItem: ", newItem);
        Object.keys(obj).forEach(key=> {
            expect(newItem[key]).toEqual(obj[key]);
        });
    });
});