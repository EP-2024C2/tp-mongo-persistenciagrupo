const { Router } = require("express");
const componenteController = require("../controllers/componente.controller");
const middleware = require("../middlewares");

const componentsRoutes = Router();

componentsRoutes.get("/", componenteController.getComponentes);
componentsRoutes.get(
  "/:id",
  middleware.validateId,
  componenteController.getComponenteById
);
componentsRoutes.post(
  "/",
  middleware.validateSchema,
  componenteController.createComponente
);
componentsRoutes.put(
  "/:id",
  middleware.validateId,
  middleware.validateSchema,
  componenteController.updateComponente
);
componentsRoutes.delete(
  "/:id",
  middleware.validateId,
  componenteController.deleteComponente
);
componentsRoutes.get(
  "/:id/productos",
  middleware.validateId,
  componenteController.getProductosByComponenteId
);

module.exports = componentsRoutes;
