const { Router } = require("express");
const componenteController = require("../controllers/componente.controller");
const middleware = require("../middlewares");
const { Componente } = require("../models");
const componenteSchema = require("../schemas/componente.schema");

const componentsRoutes = Router();

componentsRoutes.get("/", componenteController.getComponentes);
componentsRoutes.get(
  "/:id",
  middleware.validateId(Componente),
  componenteController.getComponenteById
);
componentsRoutes.post(
  "/",
  middleware.validateSchema(componenteSchema),
  componenteController.createComponente
);
componentsRoutes.put(
  "/:id",
  middleware.validateId(Componente),
  middleware.validateSchema(componenteSchema),
  componenteController.updateComponente
);
componentsRoutes.delete(
  "/:id",
  middleware.validateId(Componente),
  componenteController.deleteComponente
);
componentsRoutes.get(
  "/:id/productos",
  middleware.validateId(Componente),
  componenteController.getProductosByComponenteId
);

module.exports = componentsRoutes;
