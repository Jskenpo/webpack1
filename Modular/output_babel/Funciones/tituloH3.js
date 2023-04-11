"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tituloh3 = void 0;
var tituloh3 = function tituloh3(texto, parent) {
  var titulo = document.createElement("h3");
  titulo.id = "titulotextH3";
  titulo.innerHTML = texto;
  parent.appendChild(titulo);
  return null;
};
exports.tituloh3 = tituloh3;