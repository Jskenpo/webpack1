"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recuadroHistoria = void 0;
var _HacerBoton = require("./HacerBoton.js");
var recuadroHistoria = function recuadroHistoria(titulo, autor, imagen, parent) {
  var tituloLibro = document.createElement("h3");
  var autorLibro = document.createElement("h4");
  var imagenLibro = document.createElement("img");
  var divLibro = document.createElement("div");
  divLibro.id = "divLibroHistoria";
  tituloLibro.innerHTML = titulo;
  autorLibro.innerHTML = autor;
  imagenLibro.src = imagen;
  divLibro.appendChild(tituloLibro);
  divLibro.appendChild(autorLibro);
  divLibro.appendChild(imagenLibro);
  imagenLibro.style.width = "200px";
  imagenLibro.style.height = "350px";
  divLibro.style.height = "500px";
  divLibro.style.width = "300px";
  divLibro.style.backgroundColor = "white";
  divLibro.style.padding = "20px 0";
  divLibro.style.textAlign = "center";
  divLibro.style.borderRadius = "16px";
  divLibro.style.border = "1px solid #2196F3";
  divLibro.style.marginLeft = "5%";
  divLibro.style.position = "relative";
  document.getElementById(parent).appendChild(divLibro);
  (0, _HacerBoton.HacerBoton)("Ver Libro", "boton-comprar", "Historia1.html", divLibro.id);
  return null;
};
exports.recuadroHistoria = recuadroHistoria;