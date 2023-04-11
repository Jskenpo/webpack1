"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newImagen1 = void 0;
var newImagen1 = function newImagen1(imglink, divIngreso) {
  var img1 = document.createElement('img');
  img1.src = imglink;
  img1.id = 'img1';
  img1.style.width = '100%';
  img1.style.height = '100%';
  img1.style.borderRadius = '16px';
  document.getElementById(divIngreso).appendChild(img1);
  return img1;
};
exports.newImagen1 = newImagen1;