const { Producto, Fabricante, Componente } = require("../models");
const { mongoose } = require("./../config/database");

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "componentes",
          localField: "componentes",
          foreignField: "_id",
          as: "componentes",
        },
      },
      {
        $lookup: {
          from: "fabricantes",
          localField: "fabricantes",
          foreignField: "_id",
          as: "fabricantes",
        },
      },
      {
        $project: {
          nombre: 1,
          descripcion: 1,
          precio: 1,
          componentes: {
            nombre: 1,
            descripcion: 1,
          },
          fabricante: {
            nombre: 1,
            direccion: 1,
            numeroContacto: 1,
          },
        },
      },
    ]);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, pathImg } = req.body;
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      pathImg,
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
    const producto = await Producto.findById(id);
    await producto.update({ nombre, descripcion, precio });
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);
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
    const producto = await Producto.findById(id);
    const fabricante = await Fabricante.find({ _id: { $in: fabricanteId } });
    producto.fabricantes.push(...fabricante.map((f) => f._id));
    await producto.save();
    res.status(201).json({ message: "Fabricante agregado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductoFabricantes = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "fabricantes",
          localField: "fabricantes",
          foreignField: "_id",
          as: "fabricantes",
        },
      },
      {
        $project: {
          nombre: 1,
          descripcion: 1,
          precio: 1,
          fabricantes: {
            nombre: 1,
            direccion: 1,
            numeroContacto: 1,
          },
        },
      },
    ]);
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProductoComponente = async (req, res) => {
  try {
    const { id } = req.params;
    const { componenteId } = req.body;
    const producto = await Producto.findById(id);
    const componentes = await Componente.find({ _id: { $in: componenteId } });
    producto.componentes.push(...componentes.map((f) => f._id));
    await producto.save();
    res.status(201).json({ message: "Asociación creada correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductoComponentes = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "componentes",
          localField: "componentes",
          foreignField: "_id",
          as: "componentes",
        },
      },
      {
        $project: {
          nombre: 1,
          descripcion: 1,
          precio: 1,
          componentes: {
            nombre: 1,
            descripcion: 1,
          },
        },
      },
    ]);
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
