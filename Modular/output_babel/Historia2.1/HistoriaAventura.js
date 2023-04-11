"use strict";

var _imagenes_new = require("../Funciones/imagenes_new.js");
var _HacerBoton = require("../Funciones/HacerBoton.js");
var _texto = require("../Funciones/texto.js");
var _ProgressBar = require("../Funciones/ProgressBar.js");
var _tituloH = require("../Funciones/tituloH1.js");
require("../Historia2.1/HistoriaAventura.scss");
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'HistoriaAventura.css';
link.type = 'text/css';
document.head.appendChild(link);
(0, _imagenes_new.newImagen1)("https://p4.wallpaperbetter.com/wallpaper/311/687/658/stairs-trees-fantasy-art-forest-wallpaper-preview.jpg", 'imagenFigure');
var divTitulo = document.getElementById('divTitulo');
(0, _tituloH.tituloH1)('Capítulo 2', divTitulo);
(0, _HacerBoton.HacerBoton)('Regresar', 'btnRegresar', 'Historia1.html', 'divBtnFooter');
(0, _texto.texto)('El mago casnado de vivir tantto tiempo en soledad, decidió ir en busca de una aventura fantástica, y de esta manero el mago llegó a una majestuosa montaña en la que en su cima se encontraba un gigantesco dragón. Al llegar a la cima el mago se sorprendió ya que el dragón protegía un gran tesoro el cual el mao tenía interés. En su afán de conseguir el tesoro el mago se enfrentó al dragón, pero este no se dejó vencer tan fácilmente ya que este una bestia ancestral con infinita sabiduría y poder, y con su odió atacó hasta que el mago cayó y el dragón enfurecido se dispuso a matar al mago, pero justo en ese momento el mago utilizó un hechizo milenario que derrota al dragón.', 'texto');
(0, _ProgressBar.progressBar)('progreso', '100', '100');