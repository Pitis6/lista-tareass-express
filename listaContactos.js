let contactos = [
  { id: 1, nombre: "felipe", esSoltero: false },
  { id: 2, nombre: "sara", esSoltero: true },
];

function agregarContacto(nuevoContacto) {
  contactos.push(nuevoContacto);
}

function borarContacto(contactoId) {
  let nuevosContactos = contactos.filter(
    (contacto) => contacto.id !== contactoId
  );
  contactos = nuevosContactos;
}

function buscarContacto(contactoId) {
  let contacto = contactos.filter((item) => item.id === contactoId);
  return contacto[0];
}

function imprimirContactos() {
  return contactos;
}

module.exports = {
  agregarContacto,
  borarContacto,
  buscarContacto,
  imprimirContactos,
};
