const Joi = require("joi");

const productoSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional(),
  precio: Joi.number().required(),
  pathImg: Joi.string().optional(),
  fabricantes: Joi.array().items(Joi.string().required()).optional(),
  componentes: Joi.array().items(Joi.string().required()).optional(),
});

module.exports = productoSchema;
