const { mongoose } = require("../config/database");

const validateId = (Model) => {
  return async (req, res, next) => {
    try {
      const { id } = req.params;
      const model = await Model.findById(id);
      const modelName = Model.modelName;

      if (!model) {
        return res
          .status(404)
          .json({ message: `El ${modelName} con id ${id} no fue encontrado` });
      }

      req.modelo = model;
      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Error del servidor",
      });
    }
  };
};

const validateSchema = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        errores: error.details.map(({ message }) => ({ error: message })),
      });
    }

    next();
  };
};

module.exports = { validateId, validateSchema };
