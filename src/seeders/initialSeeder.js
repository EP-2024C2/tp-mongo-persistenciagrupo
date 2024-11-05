const { Componente, Fabricante, Producto } = require("../models");

const initialTestData = async () => {
  try {
    const Producto1 = await Producto.create({
      id: 1,
      nombre: "Laptop X200",
      descripcion: "Una laptop de alto rendimiento",
      precio: 1200.99,
      pathImg: "/images/productos/laptop-x200.jpg",
    });
    const Producto2 = await Producto.create({
      id: 2,
      nombre: "Smartphone S5",
      descripcion: "Teléfono inteligente con pantalla OLED",
      precio: 799.99,
      pathImg: "/images/productos/smartphone-s5.jpg",
    });

    const Fabricante1 = await Fabricante.create({
      id: 1,
      nombre: "TechCorp",
      direccion: "1234 Elm St, Ciudad",
      numeroContacto: "+123456789",
      pathImgPerfil: "/images/fabricantes/techcorp.jpg",
    });

    const Fabricante2 = await Fabricante.create({
      id: 2,
      nombre: "Fabricante 2",
      direccion: "Direccion del fabricante 2",
      numeroContacto: "Numero de contacto del fabricante 2",
      pathImgPerfil: "pathImgPerfil del fabricante 1",
    });

    const Componente1 = await Componente.create({
      id: 1,
      nombre: "SSD 1TB",
      descripcion: "Disco sólido de 1TB de capacidad",
    });

    const Componente2 = await Componente.create({
      id: 2,
      nombre: "Procesador Intel i7",
      descripcion: "Procesador de octava generación",
    });

    const Componente3 = await Componente.create({
      id: 3,
      nombre: "Pantalla OLED 6.5 pulgadas",
      descripcion: "Pantalla de alta definición",
    });

    const Componente4 = await Componente.create({
      id: 4,
      nombre: "Batería 4000mAh",
      descripcion: "Batería de larga duración",
    });

    Producto1.fabricantes(Fabricante1);
    Producto1.componentes(Componente1);
    Producto1.componentes(Componente2);

    Producto2.componentes(Componente3);
    Producto2.componentes(Componente4);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  initialTestData,
};
