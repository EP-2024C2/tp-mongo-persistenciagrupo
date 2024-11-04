const { Router } = require("express");
const productRoutes = require("./productos.routes");
const manufacturerRoutes = require("./fabricantes.routes");
const componentsRoutes = require("./componentes.routes");

const router = Router();

router.use("/productos", productRoutes);
router.use("/fabricantes", manufacturerRoutes);
router.use("/componentes", componentsRoutes);

module.exports = router;
