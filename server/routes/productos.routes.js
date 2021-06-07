module.exports = app => {
  const productos = require("../controllers/producto.controller.js");

  var router = require("express").Router();

  // Crear un nuevo Producto
  router.post("/", productos.agregar);

  // Trae todos los productos
  router.get("/", productos.buscarTodos);

  // Trae todos los productos habilitados
  router.get("/habilitados", productos.encontrarHabilitados);

  // Devuelve un producot por su id
  router.get("/:id", productos.buscarUnoPorId);

  // Actualiza un Tutorial por su id
  router.put("/:id", productos.actualizar);

  // Borra un tutorial por su id
  router.delete("/:id", productos.borrar);

  // Borra todos los productos
  // router.delete("/", productos.borrarTodos);

  app.use("/api/productos", router);
};
