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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  ],
});

fabricanteSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  },
});

const Fabricante = mongoose.model("Fabricante", fabricanteSchema);

module.exports = Fabricante;
