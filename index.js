const { joiAccountSchema } = require('./validations/account')
const { validateAsPieces } = require('./validations/validator')

module.exports = {
    joiAccountSchema,
    validateAsPieces
}