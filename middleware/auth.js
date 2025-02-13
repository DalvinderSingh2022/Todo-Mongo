const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers?.authorization?.split(' ')?.[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({ message: 'Failed to authenticate token', error });
        }
        req.user = user;
        next();
    });
};