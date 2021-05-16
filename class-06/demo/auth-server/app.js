'use strict';

const express = require('express');
const mongoose = require('mongoose');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const UserModel = require('./models/user')

const app = express();

// process json data
app.use(express.json())
// process form input ->  body
app.use(express.urlencoded({extended: true}))

// in the request header 

// Basic Auth: adding encoded(username:password)
app.post('/login', async (req, res)=> {
    // get username and password from the req headers
    // they will be encoded -> decode them
    // Authorizarion "Basic encodedString"
    console.log(req.headers);
    let basicHeader = req.headers.authorization.split(' ');
    let encoded = basicHeader.pop(); // index[1]
    console.log("encoded :::: ", encoded)
    let decoded = base64.decode(encoded); // result is user:password
    let [username, password] = decoded.split(':'); //destructuring
    console.log(`username: ${username} password: ${password}`)
    // get it from DB
    // then compare
    // if true -> then its valid
    // if false -> not authorized res.status(403).send('Unauthorized')
    const user = await UserModel.findOne({username: username});
    console.log("user -----> ", user);
    const valid = await bcrypt.compare(password, user.password);
    console.log("valid : ", valid)
    if (valid) {
        res.status(200).json(user);
    } else {
        res.status(403).send('Wrong username or password');
    }
});

// signup & signin
app.post('/register', async (req, res)=> {
    // create a new user
    // read from the request body
    // user object : req.body -> {username: user, password: password}
    // 1- hash the password 
    // 2- save to db 
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = new UserModel(req.body);
        const record = await user.save();
        res.status(200).json(user);
    } catch(e) {
        res.status(403).send('Error Happened!');
    }
   
});


mongoose.connect('mongodb://localhost:27017/class-06', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=> {
    app.listen(3000, ()=> console.log('We are here on port 3000'));
});
// from dotenv
