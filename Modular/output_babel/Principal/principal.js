"use strict";

var _GlowDiv = require("../Funciones/GlowDiv.js");
var _imagenes_new = require("../Funciones/imagenes_new.js");
var _secc_principal = require("../Funciones/secc_principal.js");
var _tituloH = require("../Funciones/tituloH3.js");
var _tituloH2 = require("../Funciones/tituloH1.js");
require("../Principal/principal.scss");
//crear link para css
var link = document.createElement("link");
link.rel = "stylesheet";
link.href = "principal.css";
link.type = "text/css";
document.head.appendChild(link);
var parentH1 = document.getElementById("seccion_titulo");
var textoH1 = "Librería y Panadería del Norte";
(0, _tituloH2.tituloH1)(textoH1, parentH1);
var parentH3 = document.getElementById("Bienvenido");
var textoH3 = "Bienvenidos a la librería y panadería del norte, aquí encontrarás todo lo que necesitas para tu hogar y para tu negocio.";
(0, _tituloH.tituloh3)(textoH3, parentH3);
var parent = "Libros_Populares";
var h2Texto = "Libros Populares";
var aTexto = "Haz clic aquí para ir a la página";
var aHref = "../Populares/libros-populares.html";
var divId = "divimgLP";
(0, _secc_principal.crearElementos)(parent, h2Texto, aTexto, aHref, divId);
var parent2 = "Nuevos_lanzamientos";
var h2Texto2 = "Nuevos Lanzamientos";
var aTexto2 = "Haz clic aquí para ir a la página";
var aHref2 = "../NuevosLanzamientos/nuevos-lanzamientos.html";
var divId2 = "divimgNL";
(0, _secc_principal.crearElementos)(parent2, h2Texto2, aTexto2, aHref2, divId2);
var imagen1 = (0, _imagenes_new.newImagen1)('https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop', 'divimgNL');
document.getElementById('divimgLP').appendChild(imagen1);
var imagen2 = (0, _imagenes_new.newImagen1)('https://assets.bonappetit.com/photos/60a3f107c69110723994f2fe/5:4/w_2000,h_1600,c_limit/0621-Books-Lede.jpg', 'Nuevos_lanzamientos');
document.getElementById('divimgNL').appendChild(imagen2);

//agregar la funcion glow al div libros populares
(0, _GlowDiv.GlowDiv)('Libros_Populares');
//agregar la funcion glow al div nuevos lanzamientos
(0, _GlowDiv.GlowDiv)('Nuevos_lanzamientos');