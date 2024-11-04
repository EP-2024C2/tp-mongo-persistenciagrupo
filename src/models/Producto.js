const {mongoose} = require("../config/database");

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
            fabricanteId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Fabricante",
            },
            nombre: {
                type: String,
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
    componentes: [
        {
            componenteId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Componente",
            },
            nombre: {
                type: String,
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

const Producto = mongoose.model("Producto", productoSchema);

module.exports = Producto;
