const express = require("express");
const contactoRouter = express.Router();
const contactos = require("./listaContactos");

contactoRouter.get("/", (req, res) => {
  res.json(contactos.imprimirContactos());
});

contactoRouter.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(contactos.buscarContacto(id));
});

contactoRouter.post("/", (req, res) => {
  contactos.agregarContacto(req.body);
  res.json({
    status: 200,
    message: "Contacto creado",
    data: req.body,
  });
});

module.exports = contactoRouter;
