"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlowDiv = void 0;
//arrow function 
var GlowDiv = function GlowDiv(divIngreso) {
  var cuadro = document.getElementById(divIngreso);
  cuadro.addEventListener("mouseover", function () {
    cuadro.style.boxShadow = "0 0 10px 5px #f1f1f1";
  });
  cuadro.addEventListener("mouseout", function () {
    cuadro.style.boxShadow = "none";
  });
  return null;
};
exports.GlowDiv = GlowDiv;