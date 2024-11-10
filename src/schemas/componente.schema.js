const Joi = require("joi");

const componenteSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional(),
  productos: Joi.array().items(Joi.string().required()).optional(),
});

module.exports = componenteSchema;
