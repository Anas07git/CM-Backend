const bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const { findUserEmail } = require('./login.services');
const{loginSchema} = require('./login.validation');
const{ServerError,UserLoggedIn}= require('../utils/apiResponse');

const login = async (req, res,next) => {
    const { email, password } = req.body;

    try {
        const users = await findUserEmail(email);
        if (users.length === 0) {
            throw Boom.unauthorized(ServerError.error.invalidEmail);
        }

        const user = users[0];

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw Boom.unauthorized(ServerError.error.invalidPassword);
        }

        res.status(200).json(UserLoggedIn.success);

    } catch (error) {
      next(error);
    }
};

const validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const validationErrors = error.details.map(err => Boom.badRequest(err.message).output.payload);
        return res.status(400).json(validationErrors);
    }

    next();
};

module.exports = { login, validateLogin };
