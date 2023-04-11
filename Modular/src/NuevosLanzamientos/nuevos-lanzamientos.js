import { recuadroLibro } from "../Funciones/recuadroLibro.js";
import { HacerBoton } from "../Funciones/HacerBoton.js";
import { recuadroHistoria } from "../Funciones/RecuadroHistoria.js";
import { tituloH1 } from "../Funciones/tituloH1.js";
import { tituloH2 } from "../Funciones/tituloH2.js";
import {crearListaElementosOL} from "../Funciones/ListaOL.js";
import '../NuevosLanzamientos/nuevos-lanzamientos.scss';


const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'nuevos-lanzamientos.css';
link.type = 'text/css';
document.head.appendChild(link);

const divTitulo = document.getElementById('divTitulo');

tituloH1('Nuevos lanzamientos', divTitulo);
tituloH2('Libros más esperados para 2023','divSubtitulo');

const elementos = [
    { siglas: "CC" },
    { siglas: "CCarter" },
    { siglas: "MN" },
    { nombre: "historia" },
  ];
  
crearListaElementosOL("lista", elementos);



recuadroLibro('El cuco de Cristal','Javier Castillo','https://www.clara.es/medio/2022/11/24/el-cuco-de-cristal-de-javier-castillo_2b2b59f9_1000x1500.jpg','divCC');
recuadroLibro('Tress citas con Carter',"Beth O'leary",'https://www.clara.es/medio/2022/11/24/tres-citas-con-carter-de-beth-oleary_128cbb5a_1000x1500.jpg','divCCarter');
recuadroLibro('Mucho después de media noche','Ray Braudbury','https://www.clara.es/medio/2022/11/24/mucho-despues-de-media-noche-de-ray-bradbury_afe9cd7f_1000x1500.jpg','divMN');
HacerBoton('Regresar', 'btnRegresar', 'principal.html','divBtnFooter' )
recuadroHistoria('La leyenda del hada y el mago','Jose Santisteban','https://i.pinimg.com/564x/34/fc/9f/34fc9feee3f9d03371c00b63e35518a8--character-art-character-inspiration.jpg','divhistoria');