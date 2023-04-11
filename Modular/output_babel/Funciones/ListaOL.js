"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearListaElementosOL = void 0;
var crearListaElementosOL = function crearListaElementosOL(parentId, elementos) {
  var parent = document.getElementById(parentId);

  // crea un elemento ol y lo agrega al elemento parent
  var ol = document.createElement("ol");
  parent.appendChild(ol);

  // itera sobre el array de elementos y crea un elemento li y un elemento div con id correspondiente para cada uno
  elementos.forEach(function (elemento) {
    var li = document.createElement("li");
    ol.id = 'ol-libros';
    ol.appendChild(li);
    var div = document.createElement("div");
    div.id = "div".concat(elemento.siglas || elemento.nombre);
    li.appendChild(div);
  });
};
exports.crearListaElementosOL = crearListaElementosOL;