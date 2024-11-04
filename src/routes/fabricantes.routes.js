const { Router } = require("express");
const fabricanteController = require("../controllers/fabricante.controllers");
const middleware = require("../middlewares");

const manufacturerRoutes = Router();

manufacturerRoutes.get("/", fabricanteController.getAllFabricantes);
manufacturerRoutes.get(
  "/:id",
  middleware.validateId,
  fabricanteController.getFabricanteById
);
manufacturerRoutes.post(
  "/",
  middleware.validateSchema,
  fabricanteController.createFabricante
);
manufacturerRoutes.put(
  "/:id",
  middleware.validateSchema,
  middleware.validateId,
  fabricanteController.updateFabricante
);
manufacturerRoutes.delete(
  "/:id",
  middleware.validateId,
  fabricanteController.deleteFabricante
);
manufacturerRoutes.get(
  "/:id/productos",
  middleware.validateId,
  fabricanteController.getProductosByFabricanteId
);

module.exports = manufacturerRoutes;
