const { validateAsPieces } = require('../../validations/validator')
const { joiAccountSchema } = require('../../validations/account')

const email = 'test@m.com'
const validationMsg = validateAsPieces(joiAccountSchema, { email })
console.log(validationMsg)