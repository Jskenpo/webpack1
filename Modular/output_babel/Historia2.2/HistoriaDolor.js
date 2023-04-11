"use strict";

var _imagenes_new = require("../Funciones/imagenes_new.js");
var _HacerBoton = require("../Funciones/HacerBoton.js");
var _texto = require("../Funciones/texto.js");
var _ProgressBar = require("../Funciones/ProgressBar.js");
var _tituloH = require("../Funciones/tituloH1.js");
require("../Historia2.2/HistoriaDolor.scss");
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'HistoriaDolor.css';
link.type = 'text/css';
document.head.appendChild(link);
(0, _imagenes_new.newImagen1)("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuaeMyWGhRbQr5MLpE0-OnDIYCkiAONwe-g&usqp=CAU", 'imagenFigure');
var divTitulo = document.getElementById('divTitulo');
(0, _tituloH.tituloH1)('Capítulo 2', divTitulo);
(0, _HacerBoton.HacerBoton)('Regresar', 'btnRegresar', '../Historia1/historia1.html', 'divBtnFooter');
(0, _texto.texto)('Fue en una tarde que el mago paseando en el bosque la vista cruzó  y vió la más dulze mirada que en toda su vida jamás conoció, desde ese momento el mago supo que ese era su amor verdadero y dedicó todo su tiempo a conquistarla, el hada no se dejaba conquistar tan fácilmente, por lo que el mago optó por mostrar su devoción completa por ella, y así fue como el mago y el hada se convirtieron en la mejor pareja de todo el bosque. Sin embargo el mal que siempre existió, personificado como un ente horrorifico no soportó ver tanta felicidad entre dos seres,  y con su odió atacó hasta que el hadá cayó y el mago enfurecido se entabló una batalla épica en la que el mal fue derrotado.', 'texto');
(0, _ProgressBar.progressBar)('progreso', '100', '100');