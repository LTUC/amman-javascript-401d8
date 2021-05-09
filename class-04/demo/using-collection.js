'use strict';

const mongoose = require('mongoose');
const ModelCollection = require('./models/model-collection');
// should be in dotenv
// const MONGODB_URI = 'mongodb://localhost:27017/401d8-demo';
const MONGODB_URI = 'mongodb+srv://admin:admin@401d8.vylld.mongodb.net/test'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(()=> console.log('conntected to mongoDB'))
.catch((err)=> console.log(err));

const foodModel = require('./models/food-model');
const food = new ModelCollection(foodModel);

// async await way
// .then() -> promise way
const doDatabaseStuff = async ()=> {
    let carrot = {
      name: 'Carrot 5',
      calories: 20,
      type: 'VEG'
    }
   
    let newFood = await food.create(carrot);
    console.log('food was created,', newFood);

    // getting all items .. in array
    let allItem = await food.get();
    console.log("allItem ------> ", allItem)

    // get a specific Item:
    console.log("--------newFood._id: ", newFood._id);
    console.log("--------newFood.id: ", newFood.id);

    let oneFood = await food.get(newFood._id);
    console.log("oneFood Item --> ", oneFood);

    // let deleted = await food.delete(newFood._id);
    // console.log("deleted --> ", deleted);

    // let gettingDeleted = await food.get(newFood._id);
    // console.log("gettingDeleted --> ", gettingDeleted);

    let updated = await food.update(newFood._id,{
      name: 'UPDATED Carrot',
      calories: 20,
      type: 'FRUIT'
    });
    console.log("updated --> ", updated);

    let gettingUpdated = await food.get(newFood._id);
    console.log("gettingUpdated --> ", gettingUpdated);

    
    mongoose.disconnect();
}


doDatabaseStuff();