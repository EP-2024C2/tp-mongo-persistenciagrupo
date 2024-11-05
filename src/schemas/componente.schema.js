const Joi = require("joi");

const componenteSchema = Joi.object({
  id: Joi.number().required(),
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional(),
  productos: Joi.array()
    .items(
      Joi.object({
        productoId: Joi.string().required(),
        createdAt: Joi.date().default(Date.now),
        updatedAt: Joi.date().default(Date.now),
      })
    )
    .optional(),
});

module.exports = componenteSchema;
