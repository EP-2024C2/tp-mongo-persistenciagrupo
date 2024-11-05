const Joi = require("joi");

const fabricanteSchema = Joi.object({
  nombre: Joi.string().required(),
  direccion: Joi.string().required(),
  numeroContacto: Joi.string().required(),
  pathImgPerfil: Joi.string().optional(),
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

module.exports = fabricanteSchema;
