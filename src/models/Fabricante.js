const { mongoose } = require("../config/database");

const fabricanteSchema = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    direccion: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    numeroContacto: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    pathImgPerfil: {
      type: mongoose.Schema.Types.String,
      required: false,
    },
  },
  { strict: false }
);

fabricanteSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  },
});

const Fabricante = mongoose.model("Fabricante", fabricanteSchema);

module.exports = Fabricante;
