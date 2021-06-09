module.exports = app => {
  const productos = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  // Crear un nuevo Producto
  router.post("/", productos.addProduct);

  // Trae todos los productos o filtra por nombre si se recibe ese parametro
  router.get("/", productos.getAll);

  // Devuelve un producot por su id
  router.get("/:id", productos.getAllById);

  // Actualiza un producto por su id
  router.put("/:id", productos.updateOne);

  // Borra un producto por su id
  router.delete("/:id", productos.deleteOne);

  app.use("/api/productos", router);
};
