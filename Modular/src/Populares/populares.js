//agregar funcion recuadro 
import { recuadroLibro } from "../Funciones/recuadroLibro.js";
import { HacerBoton } from "../Funciones/HacerBoton.js";
import '../Populares/libros-populares.scss'


recuadroLibro('Violeta','Isabel Allende','https://tienda.sophosenlinea.com/imagenes/9786073/978607380791.GIF','divIA','200px');
recuadroLibro('Roma soy yo','Santiago Posteguillo','https://tienda.sophosenlinea.com/imagenes/9788466/978846667178.GIF','divRSY','200px');
recuadroLibro('Caso de Alaska Sanders','Joel Dïckens','https://tienda.sophosenlinea.com/imagenes/9788420/978842046212.GIF','divCAS','200px');
HacerBoton('Regresar', 'btnRegresar', '../Principal/index.html','divBtnRegresar' )

