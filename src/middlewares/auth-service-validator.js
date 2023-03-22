const validateUserAuth = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Not able to login',
            err: "Email or password is missing in the request"
        });
    }

    next();
}

module.exports = {
    validateUserAuth
}