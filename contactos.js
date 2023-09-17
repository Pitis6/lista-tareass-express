const express = require("express");
const contactoRouter = express.Router();
const contactos = require("./listaContactos");

contactoRouter
  .get("/", (req, res) => {
    res.json(contactos.imprimirContactos());
  })
  .get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.json(contactos.buscarContacto(id));
  })
  .delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    contactos.borrarContacto(id);
    res.send(`El contacto con id ${id} fue borrado`);
  })
  .post("/", (req, res) => {
    contactos.agregarContacto(req.body);
    res.json({
      status: 200,
      message: "Contacto creado",
      data: req.body,
    });
  })
  .delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    contactos.borrarContacto(id);
    res.send(`El contacto con id ${id} fue borrado`);
  })
  .put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    contactos.actualizarContacto(id, req.body);
    res.json({
      status: 200,
      message: `Contacto con id ${req.params.id} fue editado exitosamente`,
    });
  });

module.exports = contactoRouter;
