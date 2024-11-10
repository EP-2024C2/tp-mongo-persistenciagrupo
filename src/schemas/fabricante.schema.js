const Joi = require("joi");

const fabricanteSchema = Joi.object({
  nombre: Joi.string().required(),
  direccion: Joi.string().required(),
  numeroContacto: Joi.string().required(),
  pathImgPerfil: Joi.string().optional(),
  productos: Joi.array().items(Joi.string().required()).optional(),
});

module.exports = fabricanteSchema;
