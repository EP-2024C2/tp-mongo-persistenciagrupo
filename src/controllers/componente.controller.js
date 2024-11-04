const { Componente, Producto } = require("../models");

const getComponentes = async (req, res) => {
  try {
    const componentes = await Componente.find();
    res.json(componentes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComponenteById = async (req, res) => {
  try {
    const componente = await Componente.findById(req.params.id);
    res.json(componente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createComponente = async (req, res) => {
  try {
    const componente = new Componente(req.body);
    await componente.save();
    res.status(201).json(componente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateComponente = async (req, res) => {
  try {
    const componente = await Componente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    res.json(componente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteComponente = async (req, res) => {
  try {
    await Componente.findByIdAndDelete(req.params.id);
    res.json({ message: "Componente borrado!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductosByComponenteId = async (req, res) => {
  try {
    const productos = await Producto.find({ componente: req.params.id });
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getComponentes,
  getComponenteById,
  createComponente,
  updateComponente,
  deleteComponente,
  getProductosByComponenteId,
};
