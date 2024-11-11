const { Fabricante, Producto } = require("../models");
const { mongoose } = require("../config/database");

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
    const fabricante = await Fabricante.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $project: {
          _id: 0,
          nombre: 1,
          direccion: 1,
          numeroContacto: 1,
        },
      },
    ]);
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
    await fabricante.update(req.body);
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
    const fabricante = await Fabricante.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup: {
          from: "productos",
          localField: "_id",
          foreignField: "fabricantes",
          as: "productos",
        },
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          productos: {
            nombre: 1,
            descripcion: 1,
            precio: 1,
          },
        },
      },
    ]);

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
