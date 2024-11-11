const { Router } = require("express");
const productoController = require("../controllers/producto.controllers");
const middleware = require("../middlewares");
const productoSchema = require("../schemas/producto.schema");
const { Producto } = require("../models");

const productRoutes = Router();

productRoutes.get("/", productoController.getProductos);
productRoutes.get(
  "/:id",
  middleware.validateId(Producto),
  productoController.getProductoById
);
productRoutes.post(
  "/",
  middleware.validateSchema(productoSchema),
  productoController.createProducto
);
productRoutes.put(
  "/:id",
  middleware.validateSchema(productoSchema),
  middleware.validateId(Producto),
  productoController.updateProducto
);
productRoutes.delete(
  "/:id",
  middleware.validateId(Producto),
  productoController.deleteProducto
);
productRoutes.post(
  "/:id/fabricantes",
  middleware.validateId(Producto),
  productoController.createProductoFabricante
);
productRoutes.get(
  "/:id/fabricantes",
  middleware.validateId(Producto),
  productoController.getProductoFabricantes
);
productRoutes.post(
  "/:id/componentes",
  middleware.validateId(Producto),
  productoController.createProductoComponente
);
productRoutes.get(
  "/:id/componentes",
  middleware.validateId(Producto),
  productoController.getProductoComponentes
);

module.exports = productRoutes;
