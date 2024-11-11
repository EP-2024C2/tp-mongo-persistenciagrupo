const { Router } = require("express");
const fabricanteController = require("../controllers/fabricante.controllers");
const middleware = require("../middlewares");
const { Fabricante } = require("../models");
const fabricanteSchema = require("../schemas/fabricante.schema");

const manufacturerRoutes = Router();

manufacturerRoutes.get("/", fabricanteController.getAllFabricantes);
manufacturerRoutes.get(
  "/:id",
  middleware.validateId(Fabricante),
  fabricanteController.getFabricanteById
);
manufacturerRoutes.post(
  "/",
  middleware.validateSchema(fabricanteSchema),
  fabricanteController.createFabricante
);
manufacturerRoutes.put(
  "/:id",
  middleware.validateSchema(fabricanteSchema),
  middleware.validateId(Fabricante),
  fabricanteController.updateFabricante
);
manufacturerRoutes.delete(
  "/:id",
  middleware.validateId(Fabricante),
  fabricanteController.deleteFabricante
);
manufacturerRoutes.get(
  "/:id/productos",
  middleware.validateId(Fabricante),
  fabricanteController.getProductosByFabricanteId
);

module.exports = manufacturerRoutes;
