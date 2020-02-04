const Joi = require('@hapi/joi')

const joiAccountSchema = {
    email:
        Joi.string().email().required().min(5).max(50),
    password:
        Joi.string().required().min(5).max(1024),
    name:
        Joi.string().required().min(2).max(100),
    bio:
        Joi.string().max(100)
}

module.exports = {
    joiAccountSchema
}