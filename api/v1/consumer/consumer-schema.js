const Joi = require("joi");

const postConsumer = {
    payload: Joi.object({
        id: Joi
            .number()
            .integer(),
        name: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        address: Joi.object({
            city: Joi
                .string()
                .required()
        }).required()
    }).required(),

};

const findAll = {
    query: Joi.object({
        ofset: Joi
            .number()
            .integer()
            .min(0)
            .default(0),
        limit: Joi
            .number()
            .integer()
            .min(1)
            .max(10)
            .default(10),
        name: Joi
            .string()
            .min(1)
            .max(100)
            .trim(),
        city: Joi
            .string()
            .max(100)
            .trim(),
        name_in: Joi
            .string()
            .min(1)
            .max(300)
            .trim()
    })
};

const findById = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required(),
    })
};

module.exports = { postConsumer, findAll, findById };