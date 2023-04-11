"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.texto = void 0;
var texto = function texto(_texto, parent) {
  var textoInsert = document.createElement("p");
  textoInsert.innerHTML = _texto;
  document.getElementById(parent).appendChild(textoInsert);
  return null;
};
exports.texto = texto;