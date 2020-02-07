const Joi = require('@hapi/joi')

function validateAsPieces(joiSchema, { ...pieces }) {
    const keys = Object.keys(pieces);

    const schemaFromPieces = {}
    for (const key of keys) {
        schemaFromPieces[key] = { ...joiSchema }[key]
    }

    const { error } = Joi.object(schemaFromPieces).validate(pieces)
    return error
}

module.exports.validateAsPieces = validateAsPieces