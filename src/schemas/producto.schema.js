const Joi = require("joi");

const productoSchema = Joi.object({
  nombre: Joi.string().required(),
  descripcion: Joi.string().optional(),
  precio: Joi.number().required(),
  pathImg: Joi.string().optional(),
  fabricantes: Joi.array()
    .items(
      Joi.object({
        fabricanteId: Joi.string().required(),
        nombre: Joi.string().optional(),
        createdAt: Joi.date().default(Date.now),
        updatedAt: Joi.date().default(Date.now),
      })
    )
    .optional(),
});

module.exports = productoSchema;
