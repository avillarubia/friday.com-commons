const Joi = require('@hapi/joi')

const joiSchema = {
    given_id:
        Joi.string().required().min(7).max(17),
    company_id:
        Joi.number().required().max(100),
    name:
        Joi.string().trim().required().min(2).max(100),
    details:
        Joi.string().trim().max(10000),
    url_friendly_name:
        Joi.string().trim().required().min(2).max(500),
    project_id:
        Joi.number().required().max(100),
    created_by_id:
        Joi.string().required().max(100),
    group:
        Joi.string(),
    status:
        Joi.string().min(2).max(50),
    assignees_id:
        Joi.array().items(Joi.string().trim().max(100)),
    notes:
        Joi.string().trim().min(2).max(1000),
    comments:
        Joi.array().items(Joi.string().trim().min(2).max(1000)),
    subscribers_id:
        Joi.array().items(Joi.string().trim().max(100)),
    deadline:
        Joi.date(),
    row:
        Joi.number().required().max(10000),
}

module.exports = {
    joiTodoSchema
}