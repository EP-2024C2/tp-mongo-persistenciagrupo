const { Router } = require("express");
const productoController = require("../controllers/producto.controllers");
const middleware = require("../middlewares");

const productRoutes = Router();

productRoutes.get("/", productoController.getProductos);
productRoutes.get(
  "/:id",
  middleware.validateId,
  productoController.getProductoById
);
productRoutes.post(
  "/",
  middleware.validateSchema,
  productoController.createProducto
);
productRoutes.put(
  "/:id",
  middleware.validateSchema,
  middleware.validateId,
  productoController.updateProducto
);
productRoutes.delete(
  "/:id",
  middleware.validateId,
  productoController.deleteProducto
);
productRoutes.post(
  "/:id/fabricantes",
  middleware.validateSchema,
  middleware.validateId,
  productoController.createProductoFabricante
);
productRoutes.get(
  "/:id/fabricantes",
  middleware.validateId,
  productoController.getProductoFabricantes
);
productRoutes.post(
  "/:id/componentes",
  middleware.validateSchema,
  middleware.validateId,
  productoController.createProductoComponente
);
productRoutes.get(
  "/:id/componentes",
  middleware.validateId,
  productoController.getProductoComponentes
);

module.exports = productRoutes;
