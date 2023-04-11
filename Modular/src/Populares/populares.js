//agregar funcion recuadro 
import { recuadroLibro } from "../Funciones/recuadroLibro.js";
import { HacerBoton } from "../Funciones/HacerBoton.js";
import { crearListaLibros } from "../Funciones/ListaUL.js";
import { tituloH1 } from "../Funciones/tituloH1.js";
import { tituloH2 } from "../Funciones/tituloH2.js";
import '../Populares/libros-populares.scss';


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'libros-populares.css';
link.type = 'text/css';
document.head.appendChild(link);

const divTitulo = document.getElementById('divTitulo');

tituloH1('Libros Populares', divTitulo);
tituloH2('Libros más populares del año 2022', 'divSubtitulo');


const libros = [
    { siglas: "IA" },
    { siglas: "RSY" },
    { siglas: "CAS" },
  ];
  
crearListaLibros("lista", libros);

recuadroLibro('Violeta','Isabel Allende','https://tienda.sophosenlinea.com/imagenes/9786073/978607380791.GIF','divIA','200px');
recuadroLibro('Roma soy yo','Santiago Posteguillo','https://tienda.sophosenlinea.com/imagenes/9788466/978846667178.GIF','divRSY','200px');
recuadroLibro('Caso de Alaska Sanders','Joel Dïckens','https://tienda.sophosenlinea.com/imagenes/9788420/978842046212.GIF','divCAS','200px');
HacerBoton('Regresar', 'btnRegresar', '../Principal/index.html','divBtnRegresar' )

