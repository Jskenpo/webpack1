"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _imagenes_new = require("../Funciones/imagenes_new.js");
var _HacerBoton = require("../Funciones/HacerBoton.js");
var _texto2 = require("../Funciones/texto.js");
var _ProgressBar = require("../Funciones/ProgressBar.js");
var _Opcion = require("../Funciones/Opcion.js");
var _tituloH = require("../Funciones/tituloH1.js");
require("../Historia1/Historia1.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Historia1.css';
link.type = 'text/css';
document.head.appendChild(link);
var _titulo = /*#__PURE__*/new WeakMap();
var _imagenUrl = /*#__PURE__*/new WeakMap();
var _texto = /*#__PURE__*/new WeakMap();
var _opciones = /*#__PURE__*/new WeakMap();
var Historia = /*#__PURE__*/function () {
  function Historia(titulo, imagenUrl, texto, opciones) {
    _classCallCheck(this, Historia);
    _classPrivateFieldInitSpec(this, _titulo, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _imagenUrl, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _texto, {
      writable: true,
      value: ''
    });
    _classPrivateFieldInitSpec(this, _opciones, {
      writable: true,
      value: []
    });
    _classPrivateFieldSet(this, _titulo, titulo);
    _classPrivateFieldSet(this, _imagenUrl, imagenUrl);
    _classPrivateFieldSet(this, _texto, texto);
    _classPrivateFieldSet(this, _opciones, opciones);
  }
  _createClass(Historia, [{
    key: "inicializar",
    value: function inicializar() {
      (0, _imagenes_new.newImagen1)(_classPrivateFieldGet(this, _imagenUrl), 'imagenFigure');
      var divTitulo = document.getElementById('divTitulo');
      (0, _tituloH.tituloH1)(_classPrivateFieldGet(this, _titulo), divTitulo);
      (0, _HacerBoton.HacerBoton)('Regresar', 'btnRegresar', 'nuevos-lanzamientos.html', 'divBtnFooter');
      (0, _texto2.texto)(_classPrivateFieldGet(this, _texto), 'texto');
      _classPrivateFieldGet(this, _opciones).forEach(function (opcion) {
        opcion(opcion.texto, opcion.id, opcion.label, opcion.url);
      });
      (0, _ProgressBar.progressBar)('progreso', '50', '100');
    }
  }]);
  return Historia;
}();
var historia1 = new Historia('Capítulo 1', 'https://p4.wallpaperbetter.com/wallpaper/311/687/658/stairs-trees-fantasy-art-forest-wallpaper-preview.jpg', 'Cuenta la historia de un mago que un día en su bosque encantado lloró, por que a pesar de todo su poder y sabiduría no había podido encontrar a su amor verdadero, y por eso se sentía triste y solo. La luna su única amiga lo apoyaba y le daba fuerzas para soportar el lamento y dolor que sentía por culpa de su tan larga soledad ya que el sabía muy bien que debido al impacto de su existencia no debía salir de su destino y que tarde o temprano, si en su destino está escrito, encontrará su verdadero amor.', [{
  texto: 'Busca aventura para distraerse',
  id: 'OP1',
  label: 'Opción 1',
  url: 'HistoriaAventura.html'
}, {
  texto: 'Sigue con su dolor',
  id: 'OP2',
  label: 'Opción 2',
  url: 'HistoriaDolor.html'
}]);
historia1.inicializar();