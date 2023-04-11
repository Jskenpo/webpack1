"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HacerBoton = void 0;
//hacer arrow function

var HacerBoton = function HacerBoton(texto, id, direccion, parent) {
  var boton = document.createElement('button');
  boton.setAttribute('id', id);
  boton.setAttribute('class', 'btn btn-outline-light');
  boton.setAttribute('type', 'button');
  boton.setAttribute('onclick', "location.href='" + direccion + "'");
  boton.textContent = texto;
  boton.style.backgroundColor = "white";
  boton.style.color = "#2196F3";
  boton.style.border = "1px solid #2196F3";
  boton.style.borderRadius = "5px";
  boton.style.margin = "10px";
  boton.style.padding = "10px 20px";
  boton.style.fontSize = "16px";
  boton.style.fontWeight = "bold";
  boton.style.textAlign = "center";
  boton.style.height = "50px";
  boton.style.width = "200px";
  boton.style.position = "relative";

  // Agregar regla CSS para el efecto hover
  boton.style.cursor = "pointer";
  boton.style.backgroundRepeat = "no-repeat";
  boton.style.backgroundPosition = "center";
  boton.addEventListener("mouseenter", function () {
    boton.style.color = "white";
    boton.style.backgroundColor = "#2196F3";
    boton.style.borderColor = "#2196F3";
  });
  boton.addEventListener("mouseleave", function () {
    boton.style.color = "#2196F3";
    boton.style.backgroundColor = "white";
    boton.style.borderColor = "#2196F3";
  });
  document.getElementById(parent).appendChild(boton);
  return null;
};
exports.HacerBoton = HacerBoton;