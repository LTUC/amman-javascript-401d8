module.exports = (err, req, res, next) => {
    res.status(500).json({
        err: err, 
        message: `sth wrong happened ${err.message}`,
        path: req.path
    });
}