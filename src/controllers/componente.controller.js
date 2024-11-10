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
    const componente = await Componente.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup: {
          from: "productos",
          localField: "_id",
          foreignField: "componente",
          as: "productos",
        },
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          descripcion: 1,
          productos: {
            _id: 0,
            nombre: 1,
            descripcion: 1,
            precio: 1,
          },
        },
      },
    ]);

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
      { new: true }
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
    const productos = await Producto.aggregate([
      { $match: { componente: new mongoose.Types.ObjectId(req.params.id) } },
      {
        $lookup: {
          from: "componentes",
          localField: "componente",
          foreignField: "_id",
          as: "componente",
        },
      },
      {
        $project: {
          _id: 0,
          nombre: 1,
          descripcion: 1,
          precio: 1,
          componente: {
            _id: 0,
            nombre: 1,
            descripcion: 1,
          },
        },
      },
    ]);
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
