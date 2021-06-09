const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//8081 es el puerto configurado en el server del front en vue
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//db routes
const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Test server. Hello!." });
});
require("./routes/productos.routes")(app);

// set port, listen for requests
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
