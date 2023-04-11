"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressBar = void 0;
var progressBar = function progressBar(parent, porcentaje, maximo) {
  var progress = document.createElement("progress");
  var progreso = document.createElement("h3");
  progreso.innerHTML = porcentaje + "%";
  progress.id = "progressBar";
  progress.value = porcentaje;
  progress.max = maximo;
  document.getElementById(parent).appendChild(progreso);
  document.getElementById(parent).appendChild(progress);
  return null;
};
exports.progressBar = progressBar;