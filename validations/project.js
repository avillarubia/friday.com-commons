const Joi = require('@hapi/joi')

const joiProjectSchema = {
    given_id:
        Joi.string().required().min(7).max(14),
    name:
        Joi.string().trim().required().min(2).max(500),
    url_friendly_name:
        Joi.string().trim().required().min(2).max(500),
    company_id:
        Joi.number().required().max(100),
    created_by_id:
        Joi.string().required().max(100),
    members_id:
        Joi.array().items(Joi.string().trim().max(100))
}

module.exports = {
    joiProjectSchema
}