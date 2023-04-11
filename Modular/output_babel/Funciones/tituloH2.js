"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tituloH2 = void 0;
var tituloH2 = function tituloH2(texto, parent) {
  var titulo = document.createElement("h2");
  titulo.id = "titulotextH2";
  titulo.innerHTML = texto;
  document.getElementById(parent).appendChild(titulo);
  return null;
};
exports.tituloH2 = tituloH2;