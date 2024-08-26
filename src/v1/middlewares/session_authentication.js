const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const redis = require('../../services/database/redis');

const authenticate = async (req, res, next) => {
    try {        
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const session = await redis.get(decoded.pk_client_id);

        if (!session) {
            throw boom.unauthorized('Session expired or not found');
        }
        req.client = decoded;
        next();
    } catch (error) {
        console.log(error)
        next(boom.unauthorized('Invalid token'));
    }
};

module.exports = authenticate;
