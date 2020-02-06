const Joi = require('@hapi/joi')

function validateAsPieces(joiSchema, { ...pieces }) {
    const keys = Object.keys(pieces);

    const schemaFromPieces = {}
    for (const key of keys) {
        schemaFromPieces[key] = { ...joiSchema }[key]
    }

    return Joi.object(schemaFromPieces).validate(pieces)
}

module.exports.validateAsPieces = validateAsPieces