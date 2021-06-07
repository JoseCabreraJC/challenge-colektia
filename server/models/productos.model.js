module.exports = (sequelize, Sequelize) => {
  const Producto = sequelize.define("producto", {
    nombre: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    habilitado: {
      type: Sequelize.BOOLEAN,
    },
    imagen: {
      type: Sequelize.STRING,
    },
  });

  return Producto;
};
