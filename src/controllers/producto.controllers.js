const { Producto, Fabricante, Componente } = require("../models");

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio } = req.body;
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    const producto = await Producto.findByPk(id);
    await producto.update({ nombre, descripcion, precio });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);
    await producto.destroy();
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProductoFabricante = async (req, res) => {
  try {
    const { id } = req.params;
    const { fabricanteId } = req.body;
    const producto = await Producto.findByPk(id);
    const fabricante = await Fabricante.findByPk(fabricanteId);
    await producto.addFabricante(fabricante);
    res.status(201).json({ message: "Asociación creada correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductoFabricantes = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id, {
      include: {
        model: Fabricante,
        as: "fabricantes",
      },
    });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProductoComponente = async (req, res) => {
  try {
    const { id } = req.params;
    const { componenteId } = req.body;
    const producto = await Producto.findByPk(id);
    const componente = await Componente.findByPk(componenteId);
    await producto.addComponente(componente);
    res.status(201).json({ message: "Asociación creada correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductoComponentes = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id, {
      include: Componente
    });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
  createProductoFabricante,
  getProductoFabricantes,
  createProductoComponente,
  getProductoComponentes,
};
