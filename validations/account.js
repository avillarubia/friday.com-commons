const Joi = require('@hapi/joi')

const joiAccountSchema = {
    email:
        Joi.string().email({ tlds: { allow: false } }).required().min(5).max(50),
    password:
        Joi.string().required().min(5).max(1024),
    name:
        Joi.string().required().min(2).max(100),
    bio:
        Joi.string().max(100),
    photo:
        Joi.string().max(5000)
}

function validateAsPieces({ ...pieces }) {
    const keys = Object.keys(pieces);

    const schemaFromPieces = {}
    for (const key of keys) {
        schemaFromPieces[key] = { ...joiSchema }[key]
    }

    return Joi.object(schemaFromPieces).validate(pieces)
}

module.exports = {
    joiAccountSchema,
    validateAsPieces
}