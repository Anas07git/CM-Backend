const bcrypt = require('bcryptjs');
const Boom = require('@hapi/boom');
const {signupSchema} = require('./signup.validation');
const {findUserEmail,createUser} = require('./signup.services');
const{ServerError,UserCreation} = require('../utils/apiResponse');


const signup = async (req, res,next) => {
    
    try {
        const { email, password } = req.body
        const existingUser = await findUserEmail(email);
        if (existingUser.length > 0) {
            throw Boom.conflict(ServerError.error.emailAlreadyExists);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await createUser(email, hashedPassword);

        res.status(200).json(UserCreation.success);
    }
     catch (error) {
       next(error)
     }
};

const validateSignup = (req, res, next) => {
    const { error } = signupSchema.validate(req.body, { abortEarly: false });

    if (error) {
        const validationErrors = error.details.map(err => Boom.badRequest(err.message).output.payload);
        return res.status(400).json(validationErrors);
    }

    next();
};

module.exports = {signup, validateSignup};
