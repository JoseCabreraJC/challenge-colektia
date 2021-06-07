const db = require("../models");
const Producto = db.producto;
const Op = db.Sequelize.Op;

// Create and Save a new Producto
exports.create = (req, res) => {};

// Retrieve all Productos from the database.
exports.findAll = (req, res) => {};

// Find a single Producto with an id
exports.findOne = (req, res) => {};

// Update a Producto by the id in the request
exports.update = (req, res) => {};

// Delete a Producto with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Productos from the database.
exports.deleteAll = (req, res) => {};

// Find all published Productos
exports.findAllPublished = (req, res) => {};
