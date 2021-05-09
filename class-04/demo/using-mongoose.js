'use strict';

const mongoose = require('mongoose');
const Food = require('./models/food-model');
// should be in dotenv
const MONGODB_URI = 'mongodb://localhost:27017/401d8-demo';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
})
.then(()=> console.log('conntected to mongoDB'))
.catch((err)=> console.log(err));

// async await way
// .then() -> promise way
const doDatabasetuff = async ()=> {
    let carrot = {
      name: 'Carrot 5',
      calories: 20,
      type: 'VEG'
    }
    // let carrot = {
    //     name: 'Carrot 2',
    //     calories: 20,
    //     type: 'VEG',
    //     color: 'orange'
    //   }
    let food = new Food(carrot);
    await food.save();
    console.log('food was created,', food);

    // getting all items
    let allItem = await Food.find({});
    console.log("allItem ------> ", allItem)

    // get a specific Item:
    let oneFood = await Food.findById(food.id);
    console.log("oneFood Item --> ", oneFood);

    mongoose.disconnect();
}


doDatabasetuff();