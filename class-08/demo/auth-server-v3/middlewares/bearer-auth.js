'use strict';

const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

module.exports = async (req, res, next) => {
    // a token in the req headers 
    // Authorization header value will be "Bearer token"
    if (!req.headers.authorization) {
        next('Not Logged-in user');
        // res.status(403).send()
    } else {
        // get the token from headers
        try {
            let token = req.headers.authorization.split(' ').pop();
            let user = await UserModel.authenticateToken(token);
            console.log("from bearer user: ", user)
            if (user) {
                req.user = user;
                next();
            } else {
                next('Invalid Token!!!!');
            }

        } catch(ex) {
            // next('Invalid User Token ')
            res.status(403).send('Invalid Token!!!!');

        }
    }
        
}