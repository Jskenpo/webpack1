"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearListaLibros = void 0;
var crearListaLibros = function crearListaLibros(parentId, libros) {
  var parent = document.getElementById(parentId);

  // crea un elemento ul y lo agrega al elemento parent
  var ul = document.createElement("ul");
  ul.id = 'ul-Libros';
  parent.appendChild(ul);

  // itera sobre el array de libros y crea un elemento li y un elemento div con id correspondiente para cada uno
  libros.forEach(function (libro) {
    var li = document.createElement("li");
    ul.appendChild(li);
    var div = document.createElement("div");
    div.id = "div".concat(libro.siglas);
    li.appendChild(div);
  });
};
exports.crearListaLibros = crearListaLibros;