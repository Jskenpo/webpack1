"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.opcion = void 0;
var _HacerBoton = require("./HacerBoton.js");
var opcion = function opcion(texto, parent, _opcion, direccion) {
  var textoOpcion = document.createElement('p');
  textoOpcion.innerHTML = _opcion;
  document.getElementById(parent).appendChild(textoOpcion);
  (0, _HacerBoton.HacerBoton)(texto, "boton" + _opcion, direccion, parent);
};
exports.opcion = opcion;