const { mongoose } = require("../config/database");

const fabricanteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  numeroContacto: {
    type: String,
    required: true,
  },
  pathImgPerfil: {
    type: String,
    required: false,
  },
  productos: [
    {
      productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Fabricante = mongoose.model("Fabricante", fabricanteSchema);

module.exports = Fabricante;
