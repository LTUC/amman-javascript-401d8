'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: 'student' , enum: ['student', 'employee', 'admin', 'superadmin']}
});

// Pre-Save Hook
userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
});

const acl = {
    'student': ['enroll-course'],
    'employee': ['enroll-course', 'add-new-course', 'open-closed-course'], 
    'admin': ['enroll-course', 'add-new-course', 'open-closed-course', 'delete-users'],
    'superadmin': ['enroll-course', 'add-new-course', 'open-closed-course', 'delete-users', 'delete-admins']
}

// adding a virtual field : its not a field that is saved
// in my DB.
userSchema.virtual('capabilities').get(function(){
    console.log("in virtual !!!!");
    return acl[this.role];
});

// Create a method to authenticate user using bcrypt

// create a method to authenticate token using jwt
// statics metods: they do not relate to an instance
userSchema.statics.authenticateToken = async function(token) {
    let payload = await jwt.verify(token, SECRET);
    console.log("payload >>> ", payload); // {username: 'Omar}
    return await this.findOne({username: payload.username});
}


module.exports = mongoose.model('user', userSchema);