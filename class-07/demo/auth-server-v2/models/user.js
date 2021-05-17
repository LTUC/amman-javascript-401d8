'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

// Pre-Save Hook
userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

// Create a method to authenticate user using bcrypt

// create a method to authenticate token using jwt
// statics metods: they do not relate to an instance
userSchema.statics.authenticateToken = async function(token) {
    let payload = jwt.verify(token, SECRET);
    console.log("payload >>> ", payload); // {username: 'Omar}
    return await this.findOne({username: payload.username});
}


module.exports = mongoose.model('user', userSchema);