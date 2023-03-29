import { newImagen1 } from '../Funciones/imagenes_new.js';
import { HacerBoton } from '../Funciones/HacerBoton.js';
import { texto } from '../Funciones/texto.js';
import { progressBar } from '../Funciones/ProgressBar.js';
import { opcion } from '../Funciones/Opcion.js';
import '../Historia1/Historia1.scss';

newImagen1("https://p4.wallpaperbetter.com/wallpaper/311/687/658/stairs-trees-fantasy-art-forest-wallpaper-preview.jpg",'imagenFigure');
HacerBoton('Regresar', 'btnRegresar', '../NuevosLanzamientos/nuevos-lanzamientos.html','divBtnFooter' )
texto('Cuenta la historia de un mago que un día en su bosque encantado lloró, por que a pesar de todo su poder y sabiduría no había podido encontrar a su amor verdadero, y por eso se sentía triste y solo. La luna su única amiga lo apoyaba y le daba fuerzas para soportar el lamento y dolor que sentía por culpa de su tan larga soledad ya que el sabía muy bien que debido al impacto de su existencia no debía salir de su destino y que tarde o temprano, si en su destino está escrito, encontrará su verdadero amor.','texto');
opcion('Busca aventura para distraerse', 'OP1', 'Opción 1', '../Historia2.1/HistoriaAventura.html');
opcion('Sigue con su dolor', 'OP2', 'Opción 2', '../Historia2.2/HistoriaDolor.html');
progressBar('progreso', '50', '100');


