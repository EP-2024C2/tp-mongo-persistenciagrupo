const { mongoose } = require("../config/database");

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  precio: {
    type: Number,
    required: true,
  },
  pathImg: {
    type: String,
  },
  fabricantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fabricante",
    },
  ],
  componentes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Componente",
    },
  ],
});

productoSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
