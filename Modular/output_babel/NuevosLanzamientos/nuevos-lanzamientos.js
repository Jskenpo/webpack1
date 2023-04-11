"use strict";

var _recuadroLibro = require("../Funciones/recuadroLibro.js");
var _HacerBoton = require("../Funciones/HacerBoton.js");
var _RecuadroHistoria = require("../Funciones/RecuadroHistoria.js");
var _tituloH = require("../Funciones/tituloH1.js");
var _tituloH2 = require("../Funciones/tituloH2.js");
var _ListaOL = require("../Funciones/ListaOL.js");
require("../NuevosLanzamientos/nuevos-lanzamientos.scss");
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'nuevos-lanzamientos.css';
link.type = 'text/css';
document.head.appendChild(link);
var divTitulo = document.getElementById('divTitulo');
(0, _tituloH.tituloH1)('Nuevos lanzamientos', divTitulo);
(0, _tituloH2.tituloH2)('Libros más esperados para 2023', 'divSubtitulo');
var elementos = [{
  siglas: "CC"
}, {
  siglas: "CCarter"
}, {
  siglas: "MN"
}, {
  nombre: "historia"
}];
(0, _ListaOL.crearListaElementosOL)("lista", elementos);
(0, _recuadroLibro.recuadroLibro)('El cuco de Cristal', 'Javier Castillo', 'https://www.clara.es/medio/2022/11/24/el-cuco-de-cristal-de-javier-castillo_2b2b59f9_1000x1500.jpg', 'divCC');
(0, _recuadroLibro.recuadroLibro)('Tress citas con Carter', "Beth O'leary", 'https://www.clara.es/medio/2022/11/24/tres-citas-con-carter-de-beth-oleary_128cbb5a_1000x1500.jpg', 'divCCarter');
(0, _recuadroLibro.recuadroLibro)('Mucho después de media noche', 'Ray Braudbury', 'https://www.clara.es/medio/2022/11/24/mucho-despues-de-media-noche-de-ray-bradbury_afe9cd7f_1000x1500.jpg', 'divMN');
(0, _HacerBoton.HacerBoton)('Regresar', 'btnRegresar', 'principal.html', 'divBtnFooter');
(0, _RecuadroHistoria.recuadroHistoria)('La leyenda del hada y el mago', 'Jose Santisteban', 'https://i.pinimg.com/564x/34/fc/9f/34fc9feee3f9d03371c00b63e35518a8--character-art-character-inspiration.jpg', 'divhistoria');