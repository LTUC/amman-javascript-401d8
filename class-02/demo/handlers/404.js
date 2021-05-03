module.exports = (req, res, next)=> {
    res.status(404).json({
        mesage: 'not found',
        route: req.baseUrl
    });
}