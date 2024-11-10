const { mongoose } = require("../config/database");

const ComponenteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  ],
});

ComponenteSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
    delete ret._id;
  },
});

const Componente = mongoose.model("Componente", ComponenteSchema);

module.exports = Componente;
