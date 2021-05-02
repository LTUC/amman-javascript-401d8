'use strict';

module.exports = (req, res, next)=> {
    // add 404 handler 
    res.status(404).json({
        error: 404,
        route: req.baseUrl
    });
}