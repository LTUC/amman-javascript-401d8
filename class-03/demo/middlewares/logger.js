module.exports = (req, res, next)=> {
    console.log('__LOGGER MIDDLEWARE__ Path:',req.path, 'method=', req.method ,' params=', req.params);
    // this is very important
    req.custom_msg = 'Hello from logger';
    next();
}