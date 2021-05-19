'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserModel = require('./models/user')
const basic = require('./middlewares/basic-auth.js')
const bearer = require('./middlewares/bearer-auth.js')
const acl = require('./middlewares/acl-middleware')
const oAuthMiddleware = require('./middlewares/oauth-middleware')
const app = express();

// process json data
app.use(express.json());
// process form input ->  body
app.use(express.urlencoded({extended: true}))

// in the request header 
// Basic Auth: adding encoded(username:password)
app.post('/login', basic, async (req, res)=> {
    console.log(req.token);
    // add it as a cookie
    res.cookie('auth-token', req.token);
    // add it as a header
    res.set('auth-token', req.token);
    res.status(200).send(req.token); // or .json
});

// signup & signin
app.post('/register', async (req, res)=> {
    // create a new user
    // read from the request body
    // user object : req.body -> {username: user, password: password}
    // 1- hash the password 
    // 2- save to db 
    try {
        const user = new UserModel(req.body);
        console.log("user >>> ", user);
        const record = await user.save();
        console.log("record : ", record)
        res.status(200).json(user);
    } catch(e) {
        console.log(e)
        res.status(403).send('Error Happened!');
    }
   
});

app.get('/user', bearer, (req, res)=> {
    // for logged in users
    res.status(200).json(req.user);
});

app.get('/protected-things', bearer, (req, res)=> {
    // for logged in users
    res.status(200).json({
        thing: 'test',
        count: 23
    });
});

app.get('/open-things', (req, res)=> {
    // for everyone
    res.status(200).json({
        thing: 'another-thing',
        count: 70
    });
});

app.post('/enroll-course', bearer, acl("enroll-course"), (req, res)=> {
    res.status(200).send('Enrolled Successfully!');
});

app.post('/create-new-course', bearer, acl("add-new-course"),  (req, res)=> {
    res.status(201).send('New Course Got Created!');
});

app.get('/oauth', oAuthMiddleware , (req, res)=> {
    res.cookie(req.token);
    res.set(req.token);
    res.status(201);
    res.send(req.token);
});

mongoose.connect('mongodb://localhost:27017/class-06', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=> {
    app.listen(3000, ()=> console.log('We are here on port 3000'));
});
