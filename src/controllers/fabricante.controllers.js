const { Fabricante, Producto } = require("../models");

const getAllFabricantes = async (req, res) => {
  try {
    const fabricantes = await Fabricante.find();
    res.json(fabricantes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getFabricanteById = async (req, res) => {
  try {
    const fabricante = await Fabricante.findById(req.params.id);
    res.json(fabricante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createFabricante = async (req, res) => {
  try {
    const fabricante = new Fabricante(req.body);
    const savedFabricante = await fabricante.save();
    res.status(201).json(savedFabricante);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFabricante = async (req, res) => {
  try {
    const fabricante = await Fabricante.findById(req.params.id);
    await producto.update(req.body);
    res.json(fabricante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFabricante = async (req, res) => {
  try {
    const { id } = req.params;
    const fabricante = await Fabricante.findById(id);
    await fabricante.destroy();
    res.json({ message: "Fabricante eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductosByFabricanteId = async (req, res) => {
  try {
    const productos = await Producto.find({ fabricanteId: req.params.id });
    const fabricante = await Fabricante.findById(req.params.id);
    fabricante.productos = productos;
    res.json(fabricante);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllFabricantes,
  getFabricanteById,
  createFabricante,
  updateFabricante,
  deleteFabricante,
  getProductosByFabricanteId,
};
