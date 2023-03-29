import { newImagen1 } from "../Funciones/imagenes_new.js";
import { HacerBoton } from "../Funciones/HacerBoton.js";
import { texto } from "../Funciones/texto.js";
import { progressBar } from "../Funciones/ProgressBar.js";
import '../Historia2.2/HistoriaDolor.scss';


newImagen1("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuaeMyWGhRbQr5MLpE0-OnDIYCkiAONwe-g&usqp=CAU",'imagenFigure');
HacerBoton('Regresar', 'btnRegresar', '../Historia1/historia1.html','divBtnFooter' )
texto('Fue en una tarde que el mago paseando en el bosque la vista cruzó  y vió la más dulze mirada que en toda su vida jamás conoció, desde ese momento el mago supo que ese era su amor verdadero y dedicó todo su tiempo a conquistarla, el hada no se dejaba conquistar tan fácilmente, por lo que el mago optó por mostrar su devoción completa por ella, y así fue como el mago y el hada se convirtieron en la mejor pareja de todo el bosque. Sin embargo el mal que siempre existió, personificado como un ente horrorifico no soportó ver tanta felicidad entre dos seres,  y con su odió atacó hasta que el hadá cayó y el mago enfurecido se entabló una batalla épica en la que el mal fue derrotado.','texto');
progressBar('progreso', '100', '100');
