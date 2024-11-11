const { Componente, Fabricante, Producto } = require("../models");
const { mongoose } = require("../config/database");

const initialTestData = async () => {
  try {
    await Componente.deleteMany({});
    await Fabricante.deleteMany({});
    await Producto.deleteMany({});
    const fabricantes = await Fabricante.insertMany([
      {
        nombre: "TechCorp",
        direccion: "1234 Elm St, Ciudad",
        numeroContacto: "+123456789",
        pathImgPerfil: "/images/fabricantes/techcorp.jpg",
      },
      {
        nombre: "Fabricante 2",
        direccion: "Direccion del fabricante 2",
        numeroContacto: "Numero de contacto del fabricante 2",
        pathImgPerfil: "pathImgPerfil del fabricante 1",
      },
    ]);

    const componentes = await Componente.insertMany([
      {
        nombre: "SSD 1TB",
        descripcion: "Disco sólido de 1TB de capacidad",
      },
      {
        nombre: "Procesador Intel i7",
        descripcion: "Procesador de octava generación",
      },
      {
        nombre: "Pantalla OLED 6.5 pulgadas",
        descripcion: "Pantalla de alta definición",
      },
      {
        nombre: "Batería 4000mAh",
        descripcion: "Batería de larga duración",
      },
    ]);

    const productos = await Producto.insertMany([
      {
        nombre: "Laptop X200",
        descripcion: "Una laptop de alto rendimiento",
        precio: 1200.99,
        pathImg: "/images/productos/laptop-x200.jpg",
        fabricantes: [fabricantes[0]._id],
        componentes: [componentes[0]._id], //componentes[1]._id],
      },
      {
        nombre: "Smartphone S5",
        descripcion: "Teléfono inteligente con pantalla OLED",
        precio: 799.99,
        pathImg: "/images/productos/smartphone-s5.jpg",
        componentes: [componentes[2]._id, componentes[3]._id],
      },
    ]);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  initialTestData,
};
