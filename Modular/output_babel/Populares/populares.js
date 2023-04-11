"use strict";

var _recuadroLibro = require("../Funciones/recuadroLibro.js");
var _HacerBoton = require("../Funciones/HacerBoton.js");
var _ListaUL = require("../Funciones/ListaUL.js");
var _tituloH = require("../Funciones/tituloH1.js");
var _tituloH2 = require("../Funciones/tituloH2.js");
require("../Populares/libros-populares.scss");
//agregar funcion recuadro 

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'libros-populares.css';
link.type = 'text/css';
document.head.appendChild(link);
var divTitulo = document.getElementById('divTitulo');
(0, _tituloH.tituloH1)('Libros Populares', divTitulo);
(0, _tituloH2.tituloH2)('Libros más populares del año 2022', 'divSubtitulo');
var libros = [{
  siglas: "IA"
}, {
  siglas: "RSY"
}, {
  siglas: "CAS"
}];
(0, _ListaUL.crearListaLibros)("lista", libros);
(0, _recuadroLibro.recuadroLibro)('Violeta', 'Isabel Allende', 'https://tienda.sophosenlinea.com/imagenes/9786073/978607380791.GIF', 'divIA', '200px');
(0, _recuadroLibro.recuadroLibro)('Roma soy yo', 'Santiago Posteguillo', 'https://tienda.sophosenlinea.com/imagenes/9788466/978846667178.GIF', 'divRSY', '200px');
(0, _recuadroLibro.recuadroLibro)('Caso de Alaska Sanders', 'Joel Dïckens', 'https://tienda.sophosenlinea.com/imagenes/9788420/978842046212.GIF', 'divCAS', '200px');
(0, _HacerBoton.HacerBoton)('Regresar', 'btnRegresar', 'principal.html', 'divBtnRegresar');