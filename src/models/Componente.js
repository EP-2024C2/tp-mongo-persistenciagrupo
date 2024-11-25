const { mongoose } = require("../config/database");

const ComponenteSchema = new mongoose.Schema(
  {
    nombre: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    descripcion: {
      type: mongoose.Schema.Types.String,
    },
  },
  { strict: false }
);

ComponenteSchema.set("toJSON", {
  transform: (_, ret) => {
    delete ret.__v;
  },
});

const Componente = mongoose.model("Componente", ComponenteSchema);

module.exports = Componente;
