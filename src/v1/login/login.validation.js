const Joi = require('@hapi/joi');
const Boom = require('@hapi/boom');
const{JoiErrors}=require('../utils/apiResponse')

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': JoiErrors.error.email,
        'any.required': JoiErrors.error.emailRequired
    }),
    password: Joi.string().required().messages({
        'any.required': JoiErrors.error.passwordRequired
    })
});



module.exports = { loginSchema};
