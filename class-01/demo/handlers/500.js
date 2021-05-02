
// add handlers: not Found Handler, error Handler
module.exports = (err, req, res, next) => {
    // internal server error
    res.status(500).json({
        err: err,
        message: `Server error ${err.message}`,
        path : req.path,
        query: req.query
    });
}