const base64 = require('base-64');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET || 'mysecret';
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');

module.exports = async (req, res, next) => {
    // get username and password from the req headers
    // they will be encoded -> decode them
    // Authorizarion "Basic encodedString"
    
    if (!req.headers.authorization) {
        next('Invalid username&password');
        return;
    }
    
    let basicHeader = req.headers.authorization.split(' ').pop();
    let decoded = base64.decode(basicHeader); // result is user:password
    let [username, password] = decoded.split(':'); //destructuring
    console.log(`username: ${username} password: ${password}`);
    const user = await UserModel.findOne({username: username});
    console.log("user -----> ", user);
    const valid = await bcrypt.compare(password, user.password);
    console.log("valid : ", valid);

    if (valid) {
        req.user = user;
        // generate a token
        let token = jwt.sign({username: user.username}, SECRET);
        console.log("token =====> ", token)
        req.token = token;
        next();
    } else {
        next('Wrong username or password');
    }

}