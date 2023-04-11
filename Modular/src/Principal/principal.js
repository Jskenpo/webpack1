import { GlowDiv } from "../Funciones/GlowDiv.js";
import { newImagen1 } from "../Funciones/imagenes_new.js";
import { crearElementos } from "../Funciones/secc_principal.js";
import { tituloh3 } from "../Funciones/tituloH3.js";
import { tituloH1 } from "../Funciones/tituloH1.js";
import '../Principal/principal.scss';

// Importamos el objeto con las propiedades privadas
import privado from "../Funciones/privado.js";

// Creamos alias para las propiedades privadas
const { #divImgLP: divImgLP, #divImgNL: divImgNL } = privado;

//crear link para css
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "principal.css";
link.type = "text/css";
document.head.appendChild(link);

const parentH1 = document.getElementById("seccion_titulo");
const textoH1 = "Librería y Panadería del Norte";
tituloH1(textoH1, parentH1);

const parentH3 = document.getElementById("Bienvenido");
const textoH3 = "Bienvenidos a la librería y panadería del norte, aquí encontrarás todo lo que necesitas para tu hogar y para tu negocio.";
tituloh3(textoH3, parentH3);

// Utilizamos las propiedades privadas
const parent = divImgLP;
const h2Texto = "Libros Populares";
const aTexto = "Haz clic aquí para ir a la página";
const aHref = "libros-populares.html";
const divId = "#divimgLP";
crearElementos(parent, h2Texto, aTexto, aHref, divId);

const parent2 = divImgNL;
const h2Texto2 = "Nuevos Lanzamientos";
const aTexto2 = "Haz clic aquí para ir a la página";
const aHref2 = "nuevos-lanzamientos.html";
const divId2 = "#divimgNL";
crearElementos(parent2, h2Texto2, aTexto2, aHref2, divId2);

const imagen1 = newImagen1('https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop', divId);
parent.appendChild(imagen1);

const imagen2 = newImagen1('https://assets.bonappetit.com/photos/60a3f107c69110723994f2fe/5:4/w_2000,h_1600,c_limit/0621-Books-Lede.jpg', divId2);
parent2.appendChild(imagen2);

//agregar la funcion glow al div libros populares
GlowDiv(divImgLP);
//agregar la funcion glow al div nuevos lanzamientos
GlowDiv(divImgNL);
