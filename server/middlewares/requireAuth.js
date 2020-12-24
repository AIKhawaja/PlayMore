module.exports = (req, res, next) => {
    if (!req.user) {
        return res.send({ "error": "You must be logged in" }).status(401)
    }
    next()
}