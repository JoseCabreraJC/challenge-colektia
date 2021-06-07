const db = require("../models");
const Producto = db.producto;
const Op = db.Sequelize.Op;

// Crear y guardar un nuevo new Producto
exports.agregar = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({
      message: "El nombre no puede estar vacio",
    });
    return;
  }
  const producto = {
    nombre: req.body.nombre,
    descripcion: req.body.descripcion || "",
    habilitado: req.body.habilitado || false,
    imagen: req.body.imagen || "imagen.jpg",
  };
  Producto.create(producto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al crear el producto.",
      });
    });
};

// Todos los Productos de la db
exports.buscarTodos = (req, res) => {
  const nombre = req.query.nombre;
  let condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Producto.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al obtener los productos.",
      });
    });
};

// Encontrar un solo Producto a partir del id
exports.buscarUnoPorId = (req, res) => {
  const id = req.params.id;

  Producto.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrio un error al obtener Producto con id=" + id,
      });
    });
};

// Editar un Product por el id en el cuerpo de la request
exports.actualizar = (req, res) => {
  const id = req.params.id;

  Producto.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Se edito el Producto satisfactoriamente.",
        });
      } else {
        res.send({
          message: `No se puede editar el Producto con id=${id}. Quizas el Producto no existe o req.body esta vacio.`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrio un error editando el Producto con id=" + id,
      });
    });
};

// Bora un Producto con el id especificado en el req
exports.borrar = (req, res) => {
  const id = req.params.id;

  Producto.destroy({
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "El producto fue eliminado satisfactoriamente!",
        });
      } else {
        res.send({
          message: `No se puede elimair el produrcot con id=${id}. Tal vez el producto no fue encontrado!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo elimiar el tutorial con el id=" + id,
      });
    });
};

// Delete all Products from the database.
// exports.borrarTodos = (req, res) => {};

// Encuentra todos los Productos habilitados
exports.encontrarHabilitados = (req, res) => {
  Producto.findAll({ where: { habilitado: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Ocurrio un error al traer los productos.",
      });
    });
};
