"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tituloH1 = void 0;
var tituloH1 = function tituloH1(texto, parent) {
  var titulo = document.createElement("h1");
  titulo.id = "titulotext";
  titulo.innerHTML = texto;
  parent.appendChild(titulo);
  return null;
};
exports.tituloH1 = tituloH1;