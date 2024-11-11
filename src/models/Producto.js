const { mongoose } = require("../config/database");

const productoSchema = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    descripcion: {
      type: mongoose.Schema.Types.String,
    },
    precio: {
      type: mongoose.Schema.Types.Number,
      required: true,
    },
    pathImg: {
      type: mongoose.Schema.Types.String,
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
  },
  { strict: false }
);

productoSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  },
});

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
